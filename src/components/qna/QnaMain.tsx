import {Box, Grid} from "@mui/material";
import React, { useState } from "react";
import {QnaBoardList} from "~/components/qna/QnaBoard/QnaBoardList";

export const QnaMain = () => {
  const [boardId, setBoardId] = useState("");
  const handleClickNoticeBoard = (boardId: string) => {
    setBoardId(boardId);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={4}>
          <QnaBoardList onClickBoard={handleClickNoticeBoard} />
        </Grid>
        <Grid item xs={8}>
          {/*{boardId.length > 0 && <BulletinPostList boardId={boardId} />}*/}
        </Grid>
      </Grid>
    </Box>
  );
};
