import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { ModifyBulletinBoardCommand } from "~/apis";
import { NameValueList } from "@vizendjs/accent";
import { useBulletinBoard, useBulletinBoardModify } from "~/components";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { Board, BoardCdo, BulletinBoardCdo } from "~/models";

export const BulletinBoardModify = ({
  onSaved,
  onCancel,
}: {
  onSaved?: () => void;
  onCancel?: () => void;
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams<{ boardId: string }>();
  const { board } = useBulletinBoard(params.boardId);
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
            boardId: params.boardId,
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
      onSaved && onSaved();
    };
    if (confirm("Are you sure want to save?")) await onSuccess();
  };

  const handleCancel = () => onCancel && onCancel();

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
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <Typography>Modify Bulletin Board</Typography>
          <Button
            variant="text"
            color="primary"
            sx={{ display: "flex", gap: "8px" }}
            onClick={handleCancel}
          >
            Back
          </Button>
        </Box>

        <Card sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              borderRadius: "8px",
              padding: "40px 120px",
              paddingRight: 0,
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "40px 120px",
                paddingRight: 0,
                flexGrow: 1,
              }}
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
              justifyContent: "center",
              gap: "20px",
              paddingTop: "30px",
            }}
          >
            <Button variant="outlined" color="primary" onClick={handleCancel}>
              Cancel
            </Button>
            <LoadingButton
              loading={modifyBulletinBoard.isLoading}
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
