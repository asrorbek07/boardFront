import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { BulletinPostCdo, FaqPostCdo } from "~/models";
import { useSnackbar } from "notistack";

import { Controller, useForm } from "react-hook-form";
import { useBulletinPostRegister } from "../hooks";

export const BulletinPostCreate = ({postId}: any) => {
  const { enqueueSnackbar } = useSnackbar();
  
  const {
    mutation: { registerBulletinPost },
  } = useBulletinPostRegister();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Partial<BulletinPostCdo>>({
    defaultValues: {
      title: "",
      content: "",
      boardId: postId,
    },
  });

  const handleMutate = async (data) => {
    const onSuccess = async () => {
      const response = await registerBulletinPost
        .mutateAsync({
          title: data.title,
          content: data.content,
          boardId: data.boardId,
        })
        .catch((e) => {
          enqueueSnackbar(e.message, { variant: "error" });
        });
    };
    if (confirm("Are you sure want to save?")) await onSuccess();
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleMutate)}>
        <Card
          sx={{
            display: "flex",
            p: 1,
            justifyContent: "space-between",
            alignContent: "center",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <Controller
              render={({ field }) => (
                <TextField
                  style={{ height: "20px !important" }}
                  fullWidth
                  label={"Title"}
                  error={!!errors?.title}
                  helperText={errors?.title && "Title is required."}
                  {...register("title", { required: true, maxLength: 20 })}
                />
              )}
              name={"title"}
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField
                  fullWidth
                  label={"Content"}
                  error={!!errors?.content}
                  helperText={errors?.content && "Content is required."}
                  {...register("content", { required: true, maxLength: 20 })}
                />
              )}
              name={"content"}
              control={control}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Button sx={{p: 2}} variant="contained" color="primary" type={"submit"}>
              Add
            </Button>
          </Box>
        </Card>
      </form>
    </>
  );
};
