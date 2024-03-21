import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { useSnackbar } from "notistack";
import {useNoticePostRemove} from "~/components";
import ThumbUpOffAlt from "@mui/icons-material/ThumbUpOffAlt";
import Visibility from "@mui/icons-material/Visibility";
import {Board, BulletinPostRdo, Post, ReadCheck, SentenceType, ThumbUpRecord} from "~/models";
import EditIcon from "@mui/icons-material/Edit";
import {Sheet} from "@mui/joy";
import {NoticePostModify} from "~/components/notice/NoticePost/NoticePostModify";
import {useNoticeThumbUpToggle} from "~/components/notice/hooks/useNoticeThumbUpToggle";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";

export const NoticePostItem = (
    {
      board,
      postRdo,
      refetchPostRdos,
    }: {
      board?:Board;
      postRdo:BulletinPostRdo;
      refetchPostRdos:()=>void;
    }
) => {
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const {mutation: { removeNoticePost },} = useNoticePostRemove();

  const{mutation:{toggleNoticeThumbUp},} = useNoticeThumbUpToggle();
  const post = postRdo.post as Post;
  const readChecks = postRdo.readChecks as ReadCheck[];
  const thumbUps = postRdo.thumbUps as ThumbUpRecord[];

  const onRemove = async (postId: string) => {
    const onSuccess = async () => {
      const response = await removeNoticePost
        .mutateAsync(
          {
            postId: postId,
          },
          {
            onSuccess: () =>
              enqueueSnackbar("Notice Post has been removed successfully", {
                variant: "success",
              }),
          }
        )
        .catch((e) => {
          console.log(e);
          enqueueSnackbar(e.message, { variant: "error" });
        });
      refetchPostRdos();
    };
    if (confirm("Are you sure want to remove?")) await onSuccess();
  };

  const onThumbUp = async (postId: string) => {
            const response = await toggleNoticeThumbUp
                .mutateAsync(
                    {
                        sentenceType: SentenceType.Post,
                        sentenceId: postId
                    },
                    {
                        onSuccess: () =>
                            enqueueSnackbar("Notice Post has been thumbUp successfully", {
                                variant: "success",
                            }),
                    }
                )
                .catch((e) => {
                    console.log(e);
                    enqueueSnackbar(e.message, { variant: "error" });
                });
            refetchPostRdos();
  };

  return (
    <>
      <ListItem
        key={post.id}
        disablePadding
        sx={{ width: "80%", my: 4, mx: "auto",display:'flex',  flexDirection: 'column'}}
      >
        <Card sx={{ width: "calc(100% - 32px)", p:2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
          <CardActions sx={{width:'100%',pb:0, height:'48'}}>
            {board?.boardPolicy?.postRule?.thumbUp&&<Button onClick={()=>onThumbUp(post.id)} size="small" sx={{height:'48px', p:0}}>
                {(thumbUps.length > 0) ? <ThumbUpOffAltRoundedIcon /> : <ThumbUpOffAlt/>}
                <Typography variant={"subtitle1"} sx={{ml:1}}>{thumbUps.length}</Typography>
            </Button>}
            {!(board?.boardPolicy?.postRule?.anonymous)&&<><Visibility color={"primary"} /><Typography variant={"subtitle1"} sx={{ml:1}}>{readChecks.length}</Typography> </>}
            <Button onClick={() => {setOpen(true)}} sx={{ height: "48px",p:0}}>
              <EditIcon />
            </Button>
            <Button size="small"  onClick={() => onRemove(post.id)} sx={{height:'48px', p:0}}>
              <DeleteIcon color={"error"} sx={{ml:'auto', height: "100%" }} />
            </Button>
          </CardActions>
        </Card>
      </ListItem>
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
          <NoticePostModify post={post} refetchPostRdos={refetchPostRdos} handleClose={handleClose} />
        </Sheet>
      </Modal>
    </>
  );
};
