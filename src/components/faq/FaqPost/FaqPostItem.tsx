import {
    Button,
    Card,
    CardActions,
    CardContent,
    Modal, TextField,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { useSnackbar } from "notistack";
import {useFaqPostRemove, useNoticePostRemove} from "~/components";
import ThumbUpOffAlt from "@mui/icons-material/ThumbUpOffAlt";
import Visibility from "@mui/icons-material/Visibility";
import {Board, BulletinPostRdo, FaqPostRdo, Post, ReadCheck, SentenceType, ThumbUpRecord} from "~/models";
import EditIcon from "@mui/icons-material/Edit";
import {Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Sheet} from "@mui/joy";
import {NoticePostModify} from "~/components/notice/NoticePost/NoticePostModify";
import {useNoticeThumbUpToggle} from "~/components/notice/hooks/useNoticeThumbUpToggle";
import ThumbUpOffAltRoundedIcon from "@mui/icons-material/ThumbUpOffAltRounded";
import {FaqPostModify} from "~/components/faq/FaqPost/FaqPostModify";
import {Controller} from "react-hook-form";

export const FaqPostItem = (
    {
      board,
      postRdo,
      refetchPostRdos,
    }: {
      board?:Board;
      postRdo:FaqPostRdo;
      refetchPostRdos:()=>void;
    }
) => {
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const {mutation: { removeFaqPost },} = useFaqPostRemove();
  const post = postRdo.post as Post;

  const onRemove = async (postId: string) => {
    const onSuccess = async () => {
      const response = await removeFaqPost
        .mutateAsync(
          {
            postId: postId,
          },
          {
            onSuccess: () =>
              enqueueSnackbar("FAQ Post has been removed successfully", {
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

  return (
    <>
      <ListItem
        key={post.id}
        disablePadding
        sx={{ width: "80%", my: 4, mx: "auto",display:'flex',  flexDirection: 'column'}}
      >
        <Card sx={{ width: "calc(100% - 32px)", p:2 }}>
          <CardContent sx={{p:0}}>
              <AccordionGroup disableDivider sx={{ width: "100%", m: 0, p: 0 }}>
                  <Accordion sx={{ m: 0, p: 0 }}>
                      <AccordionSummary
                          sx={{
                              textAlign: "center",
                              width: "100%",
                              mx: "auto",
                              bgcolor: "inherit",
                          }}
                      >
                          {post.title}
                      </AccordionSummary>
                      <AccordionDetails sx={{p:0,m:0}} >
                          {post.content}
                      </AccordionDetails>
                  </Accordion>
              </AccordionGroup>
          </CardContent>
          <CardActions sx={{p:0, height:'36px'}}>
              <Button onClick={() => {setOpen(true)}} sx={{ height: "100%",p:0, ml:'auto'}}>
                  <EditIcon />
              </Button>
              <Button size="small"  onClick={() => onRemove(post.id)} sx={{height:'100%', p:0}}>
                  <DeleteIcon color={"error"}  />
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
          <FaqPostModify post={post} refetchPostRdos={refetchPostRdos} handleClose={handleClose} />
        </Sheet>
      </Modal>
    </>
  );
};
