import {Button, Card, CardActions, CardContent, Divider, Modal, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { useSnackbar } from "notistack";
import {
    BulletinPostCreate,
    useBulletinCommentRemove,
    useBulletinReplyList, useBulletinReplyRemove,
    useBulletinThumbUpToggle
} from "~/components";
import {BulletinCommentRdo, BulletinReplyRdo, Comment, Post, SentenceType} from "~/models";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import ThumbUpOffAlt from "@mui/icons-material/ThumbUpOffAlt";
import Visibility from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import {Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Sheet} from "@mui/joy";
import {BulletinCommentModify} from "~/components/bulletin/BulletinComment/BulletinCommentModify";
import {BulletinReplyModify} from "~/components/bulletin/BulletinReply/BulletinReplyModify";


export const BulletinReplyItem = (
    {
      post,
      replyRdo,
      refetchReplyRdos,
    }:{
      post?:Post;
      replyRdo:BulletinReplyRdo;
      refetchReplyRdos:()=>void;
    }
) => {
    const reply = replyRdo.reply;
    const handleClose = () => setOpen(false);
    const thumbUps = replyRdo.thumbUps;
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = React.useState<boolean>(false);
    const {
        mutation: { removeBulletinReply },
    } = useBulletinReplyRemove();
    const{mutation:{toggleBulletinThumbUp},} = useBulletinThumbUpToggle();
    const onRemove = async (commentId: string) => {
        const onSuccess = async () => {
            const response = await removeBulletinReply
                .mutateAsync(
                    {
                        replyId: reply.id,
                    },
                    {
                        onSuccess: () =>
                            enqueueSnackbar(
                                "Bulletin Reply has been removed successfully",
                                { variant: "success" }
                            ),
                    }
                )
                .catch((e) => {
                    enqueueSnackbar(e.message, { variant: "error" });
                });
            refetchReplyRdos();
        };
        if (confirm("Are you sure want to remove?")) await onSuccess();
    };

  const onThumbUp = async (commentId: string) => {
    const response = await toggleBulletinThumbUp
        .mutateAsync(
            {
              sentenceType: SentenceType.Reply,
              sentenceId: commentId,
            },
            {
              onSuccess: () =>
                  enqueueSnackbar("Bulletin Reply has been thumbUp successfully", {
                    variant: "success",
                  }),
            }
        )
        .catch((e) => {
          console.log(e);
          enqueueSnackbar(e.message, { variant: "error" });
        });
    refetchReplyRdos();
  };
  
  return (
    <>
      <ListItem
          key={reply.id}
          disablePadding
          sx={{
              width: "90%",
              mt:2,
              ml: "auto",
              display: "flex",
              flexDirection: "column",
          }}
      >
        <Card sx={{ width: "calc(100% - 16px)", p: 1, bgcolor:'#E9E9E9' }}>
            <CardContent sx={{px:1,py:0}}>
                <Typography variant="subtitle1" color="text.secondary">
                    {reply.text}
                </Typography>
            </CardContent>
            <CardActions sx={{ width: "100%", p: 0, height: "36px" }}>
                {post?.commentRule?.thumbUp && (
                    <Button onClick={()=>onThumbUp(reply.id)} size="small" sx={{ height: "100%", p: 0,mr:'auto' }}>
                        {(thumbUps.length > 0) ? <ThumbUpOffAltRoundedIcon /> : <ThumbUpOffAlt/>}
                        <Typography variant={"subtitle1"} sx={{ ml: 1 }}>
                            {thumbUps.length}
                        </Typography>
                    </Button>
                )}
                <Button onClick={() => {setOpen(true);}} sx={{ height: "100%", p: 0}}>
                    <EditIcon />
                </Button>
                <Button
                    size="small"
                    onClick={() => onRemove(reply.id)}
                    sx={{ height: "100%", p: 0 }}
                >
                    <DeleteIcon color={"error"} sx={{ ml: "auto", height: "100%" }} />
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
                <BulletinReplyModify reply={reply} refetchReplyRdos={refetchReplyRdos} handleClose={handleClose} />
            </Sheet>
        </Modal>
    </>
  );
};
