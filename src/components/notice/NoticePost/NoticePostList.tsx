import * as React from "react";
import {
  AppBar,
  Button,
  Divider,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import {useNoticeBoard, useNoticePostList,} from "~/components";
import { Sheet } from "@mui/joy";
import {NoticePostCreate} from "~/components/notice/NoticePost/NoticePostCreate";
import {NoticePostItem} from "~/components/notice/NoticePost/NoticePostItem";

export const NoticePostList = ({boardId}:{boardId:string;}) => {
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const { board, refetchBoard } = useNoticeBoard(boardId);
  const { postRdos, refetchPostRdos } = useNoticePostList(boardId);
  return (
    <>
      <AppBar
        color="default"
        sx={{ bottom: "auto", top: "64px", width: "calc(100% * 2/3)" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 0,
          }}
        >
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              textAlign: "center",
              gap: "20px",
              width: "100%",
            }}
          >
            <Typography variant="h5" component="div">
              {board?.title}
            </Typography>
            <Typography variant="h6" component="div">
              {board?.description}
            </Typography>
          </Box>
          <Divider />
          <Box>
            <Button onClick={() => setOpen(true)} color="primary">Add</Button>
          </Box>
        </Toolbar>
      </AppBar>

        <List
          sx={{
              mt: 8,
              p: 1,
              overflowY: "scroll",
              height: "calc(100vh - 144px)",
              width:'calc(100% - 16px)',
          }}
        >
          {postRdos.map((postRdo) => (
            <NoticePostItem key={postRdo.post.id} board={board} postRdo={postRdo} refetchPostRdos={refetchPostRdos} />
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
          <NoticePostCreate boardId={boardId} refetchPostRdos={refetchPostRdos} handleClose={handleClose} />
        </Sheet>
      </Modal>
    </>
  );
};
