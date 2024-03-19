import * as React from "react";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";

import { useParams } from "react-router-dom";
import { useFaqBoard } from "~/components/faq/hooks/useFaqBoard";
import { Board, FaqPostRdo } from "~/models";
import { useFaqPostList } from "~/components/faq/hooks/useFaqPostList";
import List from "@mui/material/List";
import {
  FaqBoardItem,
  useBulletinBoard,
  useBulletinCommentList,
  useBulletinPost,
  useBulletinPostList,
} from "~/components";
import { FaqPostItem } from "~/components/faq/FaqPost/FaqPostItem";
import { useState } from "react";
import { BulletinPostItem } from "~/components/bulletin/BulletinPost/BulletinPostItem";
import { BulletinCommentItem } from "~/components/bulletin/BulletinComment/BulletinCommentItem";

export const BulletinPost = ({
  onNewComment,
  onModifyPost,
}: {
  onNewComment: () => void;
  onModifyPost: () => void;
}) => {
  const params = useParams<{ postId: string }>();
  const { postRdo } = useBulletinPost(params.postId);
  const { commentRdos } = useBulletinCommentList(params.postId);
  const post = postRdo?.post;
  const readChecks = postRdo?.readChecks;
  const thumbUps = postRdo?.thumbUps;

  return (
    <Stack>
      <Box sx={{ width: "30%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Button onClick={onModifyPost}>Modify</Button>
        <h1>{post?.title}</h1>
        <p>{post?.content}</p>
        <nav aria-label="main mailbox folders">
          <List>
            {commentRdos.map((commentRdo) => (
              <>
                <BulletinCommentItem
                  key={commentRdo.comment.id}
                  commentRdo={commentRdo}
                />
              </>
            ))}
          </List>
          <Button onClick={onNewComment}>Comment</Button>
        </nav>
      </Box>
    </Stack>
  );
};
