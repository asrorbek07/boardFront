import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { BulletinBoardCdo, FaqBoardCdo } from "~/models";
import { useSnackbar } from "notistack";

import { Controller, useForm } from "react-hook-form";
import { useBulletinBoardList, useBulletinBoardRegister } from "~/components";
import CloseIcon from "@mui/icons-material/Close";

export const BulletinBoardCreate = ({
  handleClose,
}: {
  handleClose?: () => void;
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const {refetchBoards} = useBulletinBoardList()
  const {
    mutation: { registerBulletinBoard },
  } = useBulletinBoardRegister();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Partial<BulletinBoardCdo>>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const handleMutate = async (data) => {
    const onSuccess = async () => {
      const response = await registerBulletinBoard
        .mutateAsync(
          {
            title: data.title,
            description: data.description,
          },
          {
            onSuccess: () =>
              enqueueSnackbar(
                "Bulletin Board has been registered successfully",
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
          <Typography>New BulletinBoard</Typography>
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
                    label={"Description"}
                    error={!!errors?.description}
                    helperText={
                      errors?.description && "Description is required."
                    }
                    {...register("description", {
                      required: true,
                      maxLength: 50,
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
              loading={registerBulletinBoard.isLoading}
              variant="contained"
              color="primary"
              type={"submit"}
            >
              Add
            </LoadingButton>
          </Box>
        </Card>
      </form>
    </>
  );
};
