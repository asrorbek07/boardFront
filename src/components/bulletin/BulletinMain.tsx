import {useNavigate} from "react-router-dom";
import {Box, Button, Divider, Grid, Icon, Stack, Typography} from "@mui/material";
import {BoardList, BulletinBoard, BulletinBoardItem, useBulletinBoardList} from "~/components";
import {Board} from "~/models";
import React, {useState} from "react";
import {green} from "@mui/material/colors";
import List from "@mui/material/List";

function PlusIcon() {
    return null;
}

export const BulletinMain = () => {
    const navigate = useNavigate();
    const [boardId, setBoardId] = useState("");
    const handleClickBulletinBoard = (boardId: string) => {
        setBoardId(boardId)

    }

    const {boards} = useBulletinBoardList();
    return (
        <Box sx={{height: '100%'}}>
            <Grid container sx={{height: '100%',}}>
                <Grid item xs={4} sx={{borderRight: '2px solid #f5f5f5'}}>
                    <BoardList boards={boards} onClickBoard={handleClickBulletinBoard}/>
                </Grid>
                <Grid item xs={8}>
                    {boardId.length > 0 && <BulletinBoard boardId={boardId}/>}
                </Grid>
            </Grid>
        </Box>

    );


};