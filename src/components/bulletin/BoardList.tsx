import * as React from "react";
import { BulletinBoardCreate, BulletinBoardItem } from "~/components";
import List from "@mui/material/List";
import { Board } from "~/models";
import { AppBar, Button, Divider, Toolbar, Typography } from "@mui/material";
import Sheet from "@mui/joy/Sheet";
import { Modal } from "@mui/base";
export const BoardList = ({
  boards,
  onClickBoard,
}: {
  boards: Board[];
  onClickBoard: (boardId) => void;
}) => {
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <AppBar
        color="default"
        sx={{ top: "64px", right: "auto", width: "calc(100% * 1/3)" }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Bulletin Board
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
          pt: 1,
          overflowY: "scroll",
          height: "calc(100vh - 145px)",
        }}
      >
        {boards.map((board) => (
          <BulletinBoardItem
            key={board.id}
            board={board}
            onClick={onClickBoard}
          />
        ))}
      </List>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
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
          <BulletinBoardCreate handleClose={handleClose} />
        </Sheet>
      </Modal>
    </>
  );
};
