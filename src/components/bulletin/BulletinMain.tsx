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
        console.log(boardId)
        setBoardId(boardId)

    }
    const handleNewBulletinPost = () => navigate(`post/new`);
    const handleModifyBulletinPost = () => navigate(`modify`);

    const {boards} = useBulletinBoardList();
    return (
        <Box sx={{height: '100%'}}>
            <Grid container sx={{height: '100%',}}>
                <Grid item xs={4} sx={{borderRight: '2px solid #1976d2'}}>
                    <Box sx={{display: 'flex',p:2, alignItems:'center'}}>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                        >Bulletin Board
                        </Typography>
                        <Button sx={{m: 0, p: 1, display: 'box', height: '48px'}} onClick={()=> { navigate('new')}}>
                            <p>Add</p>
                        </Button>
                    </Box>
                    <Divider/>
                    <List sx={{p:0}}>
                        {
                            boards.map(board => (
                                <BulletinBoardItem key={board.id} board={board} onClick={handleClickBulletinBoard}/>
                            ))
                        }
                    </List>
                </Grid>
                <Grid item xs={8}>
                    {boardId.length > 0 && <BulletinBoard boardId={boardId} onNewPost={handleNewBulletinPost}
                                                          onModifyBoard={handleModifyBulletinPost}/>}
                </Grid>
            </Grid>
        </Box>

    );


};