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
import List from "@mui/material/List";
import {
  BulletinPostCreate,
  useBulletinBoard,
  useBulletinPostList,
} from "~/components";
import { BulletinPostItem } from "~/components/bulletin/BulletinPost/BulletinPostItem";
import { Sheet } from "@mui/joy";
import {Board} from "~/models";

export const BulletinPostList = ({boardId}:{boardId:string;}) => {
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const { board, refetchBoard } = useBulletinBoard(boardId);
  const { postRdos, refetchPostRdos } = useBulletinPostList(boardId);
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
                flexGrow:1,
            }}
          >
            <Typography variant="h5" component="div">
              {board?.title}
            </Typography>
            <Typography variant="h6" component="div">
              {board?.description}
            </Typography>
          </Box>
            <Button onClick={() => setOpen(true)} color="primary" sx={{display:'box', height:'48px',width:"120px"}}>Add Post</Button>
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
            <BulletinPostItem key={postRdo.post.id} board={board} postRdo={postRdo} refetchPostRdos={refetchPostRdos} />
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
          <BulletinPostCreate boardId={boardId} refetchPostRdos={refetchPostRdos} handleClose={handleClose} />
        </Sheet>
      </Modal>
    </>
  );
};
