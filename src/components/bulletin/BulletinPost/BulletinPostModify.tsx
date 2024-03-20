import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { ModifyBulletinBoardCommand, ModifyBulletinPostCommand } from "~/apis";
import { NameValueList } from "@vizendjs/accent";
import { useBulletinBoardModify, useBulletinPostModify } from "~/components";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import CloseIcon from "@mui/icons-material/Close";

export const BulletinPostModify = ({
  postId,
  handleClose,
}: {
  postId?: any;
  handleClose?: () => void;
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams<{ postId: string }>();
  const {
    mutation: { modifyBulletinPost },
  } = useBulletinPostModify();

  const [nameValueList, setNameValueList] = useState<NameValueList>({
    nameValues: [],
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Partial<ModifyBulletinPostCommand>>({
    defaultValues: {
      postId: params.postId,
      nameValueList: { nameValues: [] } as NameValueList,
    },
  });

  const handleMutate = async () => {
    const onSuccess = async () => {
      const response = await modifyBulletinPost
        .mutateAsync(
          {
            nameValueList,
            postId: postId,
          },
          {
            onSuccess: () =>
              enqueueSnackbar("Bulletin Post has been modified successfully", {
                variant: "success",
              }),
          }
        )
        .catch((e) => {
          console.log(e);
          enqueueSnackbar(e.message, { variant: "error" });
        });
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
          <Typography>Modify Bulletin Post</Typography>
          <Button
            variant="text"
            color="primary"
            sx={{ display: "flex", gap: "8px" }}
            onClick={handleClose}
          >
            <CloseIcon />
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
                    error={!!errors?.nameValueList?.nameValues}
                    // helperText={errors?.nameValueList && 'Title is required.'}
                    {...register(`nameValueList.nameValues.${0}.${"title"}`, {
                      required: false,
                      maxLength: 50,
                    })}
                    onChange={(e) => {
                      // setValue('description', e.target.value);
                      handleInputChange("title", e.target.value);
                    }}
                  />
                )}
                name="nameValueList.nameValues"
                control={control}
              />
              <Controller
                render={({ field }) => (
                  <TextField
                    fullWidth
                    label={"Content"}
                    error={!!errors?.nameValueList?.nameValues}
                    // helperText={errors?.nameValueList && 'Description is required.'}
                    {...register(`nameValueList.nameValues.${1}.${"content"}`, {
                      required: false,
                      maxLength: 500,
                    })}
                    onChange={(e) => {
                      // setValue('description', e.target.value);
                      handleInputChange("content", e.target.value);
                    }}
                  />
                )}
                name="nameValueList.nameValues"
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
              loading={modifyBulletinPost.isLoading}
              variant="contained"
              color="primary"
              type={"submit"}
            >
              Modify
            </LoadingButton>
          </Box>
        </Card>
      </form>
    </>
  );
};
