import {Box, Grid} from "@mui/material";
import {
  BulletinBoardList,
  BulletinPostList,
  useBulletinBoardList,
} from "~/components";
import React, { useState } from "react";

export const BulletinMain = () => {
  const [boardId, setBoardId] = useState("");
  const handleClickBulletinBoard = (boardId: string) => {
    setBoardId(boardId);
  };

  return (
    <Box sx={{ height: "100%" }}>
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={4}>
          <BulletinBoardList onClickBoard={handleClickBulletinBoard} />
        </Grid>
        <Grid item xs={8}>
          {boardId.length > 0 && <BulletinPostList boardId={boardId} />}
        </Grid>
      </Grid>
    </Box>
  );
};
