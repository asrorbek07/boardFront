import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import {FaqBoardCdo} from "~/models";
import { useSnackbar } from "notistack";

import { Controller, useForm } from "react-hook-form";
import {useFaqBoardRegister} from "~/components";
import CloseIcon from "@mui/icons-material/Close";

export const FaqBoardCreate = (
    {
        handleClose,
        refetchBoards,
    }: {
        handleClose?: () => void;
        refetchBoards:()=> void;
    }
) => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    mutation: { registerFaqBoard },
  } = useFaqBoardRegister();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Partial<FaqBoardCdo>>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const handleMutate = async (data) => {
    const onSuccess = async () => {
      const response = await registerFaqBoard
        .mutateAsync(
          {
            title: data.title,
            description: data.description,
          },
          {
            onSuccess: () =>
              enqueueSnackbar(
                "Faq Board has been registered successfully",
                { variant: "success" , }
              ),    
            }
        )
        .catch((e) => {
          console.log(e);
          enqueueSnackbar(e.message, { variant: "error" });
        });
         refetchBoards()
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
          <Typography>New FAQ Board</Typography>
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Controller
                render={({ field }) => (
                  <TextField
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
                    label={"Description"}
                    error={!!errors?.description}
                    helperText={
                      errors?.description && "Description is required."
                    }
                    {...register("description", {
                      required: true,
                      maxLength: 200,
                    })}
                  />
                )}
                name={"description"}
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
              loading={registerFaqBoard.isLoading}
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
