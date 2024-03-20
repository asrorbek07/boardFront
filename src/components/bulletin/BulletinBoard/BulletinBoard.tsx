import * as React from "react";
import {
  AppBar,
  Button,
  Divider,
  IconButton,
  Modal,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

import { useNavigate, useParams } from "react-router-dom";
import { useFaqBoard } from "~/components/faq/hooks/useFaqBoard";
import { Board, FaqPostRdo } from "~/models";
import { useFaqPostList } from "~/components/faq/hooks/useFaqPostList";
import List from "@mui/material/List";
import {
  BulletinBoardCreate,
  BulletinPostCreate,
  BulletinPostModify,
  FaqBoardItem,
  useBulletinBoard,
  useBulletinPostList,
} from "~/components";
import { FaqPostItem } from "~/components/faq/FaqPost/FaqPostItem";
import { useState } from "react";
import { BulletinPostItem } from "~/components/bulletin/BulletinPost/BulletinPostItem";
import { Sheet } from "@mui/joy";

function MenuIcon() {
  return null;
}

export const BulletinBoard = (props) => {
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const { board } = useBulletinBoard(props.boardId);
  const { postRdos } = useBulletinPostList(props.boardId);

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
              display: { xs: "none", sm: "flex" },
              textAlign: "left",
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
          <Box>
            <Button onClick={() => {setOpen(true)}} sx={{ m: 0, height: "48px" }}>
              <p>Modify</p>
            </Button>
          </Box>
          <Divider />
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 8,
        }}
      >
        <List
          sx={{
            m: 0,
            p: 0,
            overflowY: "scroll",
            height: "calc(100vh - 202px)",
          }}
        >
          {postRdos.map((postRdo) => (
            <BulletinPostItem key={postRdo.post.id} postRdo={postRdo} />
          ))}
        </List>
      </Box>
      <BulletinPostCreate postId={props.boardId} />

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
          <BulletinPostModify postId={props.boardId} handleClose={handleClose} />
        </Sheet>
      </Modal>
    </>
  );
};
