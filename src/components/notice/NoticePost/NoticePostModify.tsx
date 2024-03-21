import React, {useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { NameValueList } from "@vizendjs/accent";
import {useNoticePostModify} from "~/components";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import {Post, PostCdo} from "~/models";

export const NoticePostModify = (
    {
        post,
        refetchPostRdos,
        handleClose,
    }: {
        post:Post;
        refetchPostRdos:()=>void;
        handleClose: () => void;
    }
) => {
    const { enqueueSnackbar } = useSnackbar();
    const {
        mutation: { modifyNoticePost },
    } = useNoticePostModify();

    const [nameValueList, setNameValueList] = useState<NameValueList>({
        nameValues: [],
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue,
    } = useForm<Partial<PostCdo>>({
        defaultValues: post,
    });

    const handleMutate = async () => {
        const onSuccess = async () => {
            const response = await modifyNoticePost
                .mutateAsync(
                    {
                        nameValueList,
                        postId: post.id,
                    },
                    {
                        onSuccess: () =>
                            enqueueSnackbar("Notice Post has been modified successfully", {
                                variant: "success",
                            }),
                    }
                )
                .catch((e) => {
                    console.log(e);
                    enqueueSnackbar(e.message, { variant: "error" });
                });
            refetchPostRdos()
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
                    <Typography>Modify Notice Post</Typography>
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
                                        label={"Title"}
                                        error={!!errors?.title}
                                        helperText={(errors?.title?.type === 'required' && "Title is required.") ||
                                            (errors?.title?.type === 'maxLength' && "Title must be less than 50 characters.")}
                                        {...register(`title`, { required: false, maxLength: 50 })}
                                        onChange={(e) => {
                                            handleInputChange("title", e.target.value);
                                        }}
                                    />
                                )}
                                name="title"
                                control={control}
                            />
                            <Controller
                                render={({ field }) => (
                                    <TextField
                                        fullWidth
                                        label={"Content"}
                                        error={!!errors?.content}
                                        helperText={(errors?.content?.type === 'required' && "Content is required.") ||
                                            (errors?.content?.type === 'maxLength' && "Content must be less than 2000 characters.")}
                                        {...register(`content`, {
                                            required: false,
                                            maxLength: 2000,
                                        })}
                                        onChange={(e) => {
                                            handleInputChange("content", e.target.value);
                                        }}
                                    />
                                )}
                                name="content"
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
                            loading={modifyNoticePost.isLoading}
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
