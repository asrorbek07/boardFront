import React, {useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { NameValueList } from "@vizendjs/accent";
import {useBulletinReplyModify} from "~/components";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import {Reply, ReplyCdo} from "~/models";

export const BulletinReplyModify = (
    {
        reply,
        refetchReplyRdos,
        handleClose,
    }: {
        reply:Reply;
        refetchReplyRdos:()=>void;
        handleClose: () => void;
    }
) => {
    const { enqueueSnackbar } = useSnackbar();
    const {
        mutation: { modifyBulletinReply },
    } = useBulletinReplyModify();

    const [nameValueList, setNameValueList] = useState<NameValueList>({
        nameValues: [],
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue,
    } = useForm<Partial<ReplyCdo>>({
        defaultValues: reply,
    });

    const handleMutate = async () => {
        const onSuccess = async () => {
            const response = await modifyBulletinReply
                .mutateAsync(
                    {
                        nameValueList,
                        replyId: reply.id,
                    },
                    {
                        onSuccess: () =>
                            enqueueSnackbar("Bulletin Reply has been modified successfully", {
                                variant: "success",
                            }),
                    }
                )
                .catch((e) => {
                    console.log(e);
                    enqueueSnackbar(e.message, { variant: "error" });
                });
            refetchReplyRdos()
            handleClose && handleClose();
        };
        if (confirm("Are you sure want to save?")) await onSuccess();
    };

    const handleInputChange = (name: string, value: string) => {
        const existingIndex = nameValueList.nameValues.findIndex(
            (nv) => nv.name === name
        );
        if (existingIndex !== -1) {
            const updatedNameValues = [...nameValueList.nameValues];
            updatedNameValues[existingIndex].value = value;
            setNameValueList({ nameValues: updatedNameValues });
        } else {
            setNameValueList({
                nameValues: [...nameValueList.nameValues, { name, value }],
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleMutate)}>
                <Box
                    sx={{
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography>Modify Bulletin Reply</Typography>
                    <Button
                        variant="text"
                        color="primary"
                        sx={{ display: "flex", gap: "8px" }}
                        onClick={handleClose}
                    >
                        Back
                    </Button>
                </Box>

                <Card sx={{ p: 1, boxShadow: "none" }}>
                    <Box>
                        <Box
                            sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
                        >
                            <Controller
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label={"Text"}
                                        error={!!errors?.text}
                                        helperText={(errors?.text?.type === 'required' && "Text is required.") ||
                                            (errors?.text?.type === 'maxLength' && "Text must be less than 2000 characters.")}
                                        {...register(`text`, { required: false, maxLength: 2000 })}
                                        onChange={(e) => {
                                            handleInputChange("text", e.target.value);
                                        }}
                                    />
                                )}
                                name="text"
                                control={control}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                            gap: "20px",
                            paddingTop: "30px",
                        }}
                    >
                        <Button variant="outlined" color="primary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <LoadingButton
                            loading={modifyBulletinReply.isLoading}
                            variant="contained"
                            color="primary"
                            type={"submit"}
                        >
                            Save
                        </LoadingButton>
                    </Box>
                </Card>
            </form>
        </>
    );
};
