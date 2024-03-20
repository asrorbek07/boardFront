import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import QuizIcon from "@mui/icons-material/Quiz";
import ListItemText from "@mui/material/ListItemText";
import { Button, Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { useSnackbar } from "notistack";
import {
  BulletinBoardModify,
  BulletinPostModify,
  useBulletinBoardList,
  useFaqBoardRemove,
} from "~/components";
import { useNavigate } from "react-router-dom";
import { useBulletinBoardRemove } from "~/components/bulletin/hooks/useBulletinBoardRemove";
import { Board } from "~/models";
import { DashboardSharp } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import { Sheet } from "@mui/joy";
export const BulletinBoardItem = (
    {
        board,
        onClick,
        refetchBoards,
    }: {
        board: Board;
        onClick: (boardId: string) => void;
        refetchBoards:()=>void;
    }
) => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    mutation: { removeBulletinBoard },
  } = useBulletinBoardRemove();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const onRemove = async (boardId: string) => {
    const onSuccess = async () => {
      const response = await removeBulletinBoard
        .mutateAsync(
          {
            boardId: boardId,
          },
          {
            onSuccess: () =>
              enqueueSnackbar("Bulletin Board has been removed successfully", {
                variant: "success",
              }),
          }
        )
        .catch((e) => {
          enqueueSnackbar(e.message, { variant: "error" });
        });
      refetchBoards();
    };
    if (confirm("Are you sure want to remove?")) await onSuccess();
  };

  return (
    <>
      <ListItem key={board.id} disablePadding>
        <ListItemButton component="a" onClick={() => onClick(board.id)}>
          <ListItemIcon>
            <DashboardSharp />
          </ListItemIcon>
          <ListItemText primary={board.title} />
        </ListItemButton>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          sx={{ m: 0, height: "48px" }}
        >
          <EditIcon />
        </Button>
          <Button
              sx={{ m: 0, p: 1, display: "box", height: "48px" }}
              onClick={() => onRemove(board.id)}
          >
              <DeleteIcon color={"error"}/>
          </Button>
      </ListItem>

      <Modal
        aria-labelledby="Modify Board"
        aria-describedby="modify board"
        open={open}
        onClose={handleClose}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          transform: "translate(-50%, -50%)",
          zIndex: 9,
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            m: "15% auto",
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <BulletinBoardModify board={board} refetchBoards={refetchBoards} handleClose={handleClose}/>
        </Sheet>
      </Modal>
    </>
  );
};
