import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import QuizIcon from "@mui/icons-material/Quiz";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import { useSnackbar } from "notistack";
import { useBulletinCommentRemove, useBulletinReplyList } from "~/components";
import { useNavigate, useParams } from "react-router-dom";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import { BulletinReplyItem } from "~/components/bulletin/BulletinReply/BulletinReplyItem";

export const BulletinCommentItem = ({ commentRdo }) => {
  const comment = commentRdo.comment;
  const thumbUps = commentRdo.thumbUps;
  const readChecks = commentRdo.readChecks;
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams<{ boardId: string }>();
  const {
    mutation: { removeBulletinComment },
  } = useBulletinCommentRemove();
  const { replyRdos } = useBulletinReplyList(comment.id);
  const navigate = useNavigate();
  const onNewReply = () => navigate("comment/" + comment.id + "/reply/new");
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
          console.log(e);
          enqueueSnackbar(e.message, { variant: "error" });
        });
    };
    if (confirm("Are you sure want to remove?")) await onSuccess();
  };

  return (
    <>
      <ListItem key={comment.id} disablePadding>
        <ListItemIcon>
          <QuizIcon />
        </ListItemIcon>
        <ListItemText
          primary={comment.text}
          secondary={"Likes " + thumbUps.length}
        />
        <Button sx={{ height: "100%" }} onClick={() => onRemove(comment.id)}>
          <DeleteIcon sx={{ height: "100%" }} />
        </Button>
      </ListItem>
      <Button onClick={onNewReply}>Reply</Button>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {replyRdos.map((replyRdo) => (
              <BulletinReplyItem key={replyRdo?.reply.id} replyRdo={replyRdo} />
            ))}
          </List>
        </nav>
      </Box>
    </>
  );
};
