import {Button, Card, CardActions, CardContent, Divider, Modal, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { useSnackbar } from "notistack";
import {
    BulletinPostCreate,
    useBulletinCommentRemove,
    useBulletinReplyList,
    useBulletinThumbUpToggle
} from "~/components";
import {BulletinCommentRdo, Post, SentenceType} from "~/models";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import ThumbUpOffAlt from "@mui/icons-material/ThumbUpOffAlt";
import Visibility from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import {Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Sheet} from "@mui/joy";
import {BulletinCommentModify} from "~/components/bulletin/BulletinComment/BulletinCommentModify";
import {BulletinReplyList} from "~/components/bulletin/BulletinReply";


export const BulletinCommentItem = (
    {
      post,
      commentRdo,
      refetchCommentRdos,
    }:{
      post?:Post;
      commentRdo:BulletinCommentRdo;
      refetchCommentRdos:()=>void;
    }
) => {
    const comment = commentRdo.comment;
    const handleClose = () => setOpen(false);
    const thumbUps = commentRdo.thumbUps;
    const { enqueueSnackbar } = useSnackbar();
    const [openReply, setOpenReply] = React.useState<boolean>(false);

    const [open, setOpen] = React.useState<boolean>(false);
    const {
        mutation: { removeBulletinComment },
    } = useBulletinCommentRemove();
    const{mutation:{toggleBulletinThumbUp},} = useBulletinThumbUpToggle();
    const onRemove = async (commentId: string) => {
        const onSuccess = async () => {
            const response = await removeBulletinComment
                .mutateAsync(
                    {
                        commentId: commentId,
                    },
                    {
                        onSuccess: () =>
                            enqueueSnackbar(
                                "Bulletin Comment has been removed successfully",
                                { variant: "success" }
                            ),
                    }
                )
                .catch((e) => {
                    enqueueSnackbar(e.message, { variant: "error" });
                });
            refetchCommentRdos();
        };
        if (confirm("Are you sure want to remove?")) await onSuccess();
    };

  const onThumbUp = async (commentId: string) => {
    const response = await toggleBulletinThumbUp
        .mutateAsync(
            {
              sentenceType: SentenceType.Comment,
              sentenceId: commentId,
            },
            {
              onSuccess: () =>
                  enqueueSnackbar("Bulletin Comment has been thumbUp successfully", {
                    variant: "success",
                  }),
            }
        )
        .catch((e) => {
          console.log(e);
          enqueueSnackbar(e.message, { variant: "error" });
        });
    refetchCommentRdos();
  };
  
  return (
    <>
      <ListItem
          key={comment.id}
          disablePadding
          sx={{
              width: "90%",
              mt:2,
              ml: "auto",
              display: "flex",
              flexDirection: "column",
          }}
      >
        <Card sx={{ width: "calc(100% - 16px)", p: 1, bgcolor:'#F6F6F6' }}>
            <CardContent sx={{px:1,py:0}}>
                <Typography variant="subtitle1" color="text.secondary">
                    {comment.text}
                </Typography>
            </CardContent>
            <CardActions sx={{ width: "100%", p: 0, height: "36px" }}>
                {post?.commentRule?.thumbUp && (
                    <Button onClick={()=>onThumbUp(comment.id)} size="small" sx={{ height: "100%", p: 0,mr:'auto' }}>
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
                    onClick={() => onRemove(comment.id)}
                    sx={{ height: "100%", p: 0 }}
                >
                    <DeleteIcon color={"error"} sx={{ ml: "auto", height: "100%" }} />
                </Button>
            </CardActions>
            <Divider/>
            <AccordionGroup disableDivider sx={{ width: "100%", m: 0, p: 0 }}>
                <Accordion sx={{ m: 0, p: 0 }}>
                    <AccordionSummary onClick={()=>{setOpenReply(!openReply)}}
                        sx={{
                            textAlign: "center",
                            width: "100%",
                            mx: "auto",
                            bgcolor: "inherit",
                        }}
                    >
                        Reply
                    </AccordionSummary>
                    <AccordionDetails sx={{p:0,m:0}} >
                        {openReply&&<BulletinReplyList commentId={comment.id} post={post}/>}
                    </AccordionDetails>
                </Accordion>
            </AccordionGroup>
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
                <BulletinCommentModify comment={comment} refetchCommentRdos={refetchCommentRdos} handleClose={handleClose} />
            </Sheet>
        </Modal>
    </>
  );
};
