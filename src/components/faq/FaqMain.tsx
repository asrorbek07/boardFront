import {Box, Grid} from "@mui/material";
import {FaqBoardList,} from "~/components";
import React, { useState } from "react";
import {FaqPostList} from "~/components/faq/FaqPost";

export const FaqMain = () => {
  const [boardId, setBoardId] = useState("");
  const handleClickFaqBoard = (boardId: string) => {
    setBoardId(boardId);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={4}>
          <FaqBoardList onClickBoard={handleClickFaqBoard} />
        </Grid>
        <Grid item xs={8}>
          {boardId.length > 0 && <FaqPostList boardId={boardId} />}
        </Grid>
      </Grid>
    </Box>
  );
};
