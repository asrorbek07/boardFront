import { Box, Button, Card, TextField, Typography } from "@mui/material";
import {FaqPostCdo, NoticePostCdo} from "~/models";
import { useSnackbar } from "notistack";

import { Controller, useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import {useFaqPostRegister} from "~/components";

export const FaqPostCreate = (
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
    mutation: { registerFaqPost },
  } = useFaqPostRegister();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Partial<FaqPostCdo>>({
    defaultValues: {
      title: "",
      content: "",
      boardId: boardId,
    },
  });



  const handleMutate = async (data) => {
    const onSuccess = async () => {
      const response = await registerFaqPost
        .mutateAsync({
          title: data.title,
          content: data.content,
          boardId: boardId,
        })
        .catch((e) => {
          enqueueSnackbar(
              "Faq Post has been registered successfully",
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
          <Typography>New Faq Post</Typography>
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
                  label={"Question"}
                  error={!!errors?.title}
                  helperText={errors?.title && "Question is required."}
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
                  label={"Answer"}
                  error={!!errors?.content}
                  helperText={(errors?.content?.type === 'required' && "Answer is required.") ||
                      (errors?.content?.type === 'maxLength' && "Answer must be less than 2000 characters.")}
                  {...register("content", { required: true, maxLength: 2000 })}
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
