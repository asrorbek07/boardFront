import React, {useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { NameValueList } from "@vizendjs/accent";
import { useBulletinBoardModify } from "~/components";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { Board, BoardCdo} from "~/models";

export const BulletinBoardModify = (
    {
        board,
        refetchBoards,
        handleClose,
    }: {
        board:Board;
        refetchBoards:()=>void;
        handleClose: () => void;
    }
) => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    mutation: { modifyBulletinBoard },
  } = useBulletinBoardModify();

  const [nameValueList, setNameValueList] = useState<NameValueList>({
    nameValues: [],
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<Partial<BoardCdo>>({
    defaultValues: board,
  });

  const handleMutate = async () => {
    const onSuccess = async () => {
      const response = await modifyBulletinBoard
        .mutateAsync(
          {
            nameValueList,
            boardId: board.id,
          },
          {
            onSuccess: () =>
              enqueueSnackbar("Bulletin Board has been modified successfully", {
                variant: "success",
              }),
          }
        )
        .catch((e) => {
          console.log(e);
          enqueueSnackbar(e.message, { variant: "error" });
        });
        refetchBoards()
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
          <Typography>Modify Bulletin Board</Typography>
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
                    helperText={errors?.title && "Title is required."}
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
                    label={"Description"}
                    error={!!errors?.description}
                    helperText={
                      errors?.description && "Description is required."
                    }
                    {...register(`description`, {
                      required: false,
                      maxLength: 200,
                    })}
                    onChange={(e) => {
                      handleInputChange("description", e.target.value);
                    }}
                  />
                )}
                name="description"
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
              loading={modifyBulletinBoard.isLoading}
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
