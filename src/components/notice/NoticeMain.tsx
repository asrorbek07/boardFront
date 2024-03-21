import {Box, Grid} from "@mui/material";
import React, { useState } from "react";
import {NoticeBoardList} from "~/components/notice/NoticeBoard";
import {NoticePostList} from "~/components";

export const NoticeMain = () => {
  const [boardId, setBoardId] = useState("");
  const handleClickNoticeBoard = (boardId: string) => {
    setBoardId(boardId);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={4}>
          <NoticeBoardList onClickBoard={handleClickNoticeBoard} />
        </Grid>
        <Grid item xs={8}>
          {boardId.length > 0 && <NoticePostList boardId={boardId} />}
        </Grid>
      </Grid>
    </Box>
  );
};
