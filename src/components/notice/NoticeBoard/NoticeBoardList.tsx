import * as React from "react";
import List from "@mui/material/List";
import { AppBar, Button, Divider, Toolbar, Typography } from "@mui/material";
import Sheet from "@mui/joy/Sheet";
import { Modal } from "@mui/base";
import {useNoticeBoardList,NoticeBoardCreate,NoticeBoardItem} from "~/components";
export const NoticeBoardList = ({
  onClickBoard,
}: {
  onClickBoard: (boardId) => void;
}) => {
    const { boards,refetchBoards } = useNoticeBoardList();
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <AppBar
        color="default"
        sx={{ top: "64px", right: "auto", width: "calc(100% * 1/3)" }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Notice Board
          </Typography>
          <Button
            sx={{ m: 0, p: 1, display: "box", height: "48px" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <p>Add</p>
          </Button>
          <Divider />
        </Toolbar>
      </AppBar>
      <List
        sx={{
          mt: 8,
          p: 1,
          overflowY: "scroll",
          height: "calc(100vh - 144px)",
        }}
      >
        {boards.map((board) => (
          <NoticeBoardItem refetchBoards={refetchBoards} key={board.id} board={board} onClick={onClickBoard}/>
        ))}
      </List>
      <Modal
        aria-labelledby="Create Board"
        aria-describedby="create board"
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
          <NoticeBoardCreate refetchBoards={refetchBoards} handleClose={handleClose} />
        </Sheet>
      </Modal>
    </>
  );
};
