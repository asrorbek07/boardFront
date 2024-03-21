import { Box, Button, Card, TextField, Typography } from "@mui/material";
import {NoticePostCdo} from "~/models";
import { useSnackbar } from "notistack";

import { Controller, useForm } from "react-hook-form";
import {useNoticePostRegister} from "../hooks";

import CloseIcon from "@mui/icons-material/Close";

export const NoticePostCreate = (
    {
        boardId,
        refetchPostRdos ,
        handleClose,
    }: {
        boardId:string;
        refetchPostRdos:()=>void;
        handleClose:()=> void;
    }
) => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    mutation: { registerNoticePost },
  } = useNoticePostRegister();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Partial<NoticePostCdo>>({
    defaultValues: {
      title: "",
      content: "",
      boardId: boardId,
    },
  });



  const handleMutate = async (data) => {
    const onSuccess = async () => {
      const response = await registerNoticePost
        .mutateAsync({
          title: data.title,
          content: data.content,
          boardId: boardId,
        })
        .catch((e) => {
          enqueueSnackbar(
              "Notice Post has been registered successfully",
              { variant: "error" });
        });
        refetchPostRdos()
        handleClose && handleClose()
    };
    if (confirm("Are you sure want to save?")) await onSuccess();
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
          <Typography>New Notice Post</Typography>
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Controller
              render={({ field }) => (
                <TextField
                  style={{ height: "20px !important" }}
                  fullWidth
                  label={"Title"}
                  error={!!errors?.title}
                  helperText={errors?.title && "Title is required."}
                  {...register("title", { required: true, maxLength: 50 })}
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
                  {...register("content", { required: true, maxLength: 500 })}
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
              justifyContent: "end",
              gap: "20px",
              paddingTop: "30px",
            }}
          >
            <Button
              variant="outlined"
              onClick={handleClose}
              type={"button"}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              type={"submit"}
            >
              Save
            </Button>
          </Box>
        </Card>
      </form>
    </>
  );
};
