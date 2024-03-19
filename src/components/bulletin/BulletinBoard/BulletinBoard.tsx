import * as React from 'react';
import {AppBar, Button, Divider, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import Box from '@mui/material/Box';

import {useNavigate, useParams} from "react-router-dom";
import {useFaqBoard} from "~/components/faq/hooks/useFaqBoard";
import {Board, FaqPostRdo} from "~/models";
import {useFaqPostList} from "~/components/faq/hooks/useFaqPostList";
import List from "@mui/material/List";
import {FaqBoardItem, useBulletinBoard, useBulletinPostList} from "~/components";
import {FaqPostItem} from "~/components/faq/FaqPost/FaqPostItem";
import {useState} from "react";
import {BulletinPostItem} from "~/components/bulletin/BulletinPost/BulletinPostItem";

function MenuIcon() {
    return null;
}

export const BulletinBoard = (props) => {
    const [boardId, setBoardId] = useState(props.boardId)
    const {board,} =useBulletinBoard(props.boardId);
    const {postRdos,} = useBulletinPostList(props.boardId);
    const navigate = useNavigate();
    const handleNewBulletinPost = () => navigate(boardId+`/post/new`);
    const handleModifyBulletinPost = () => navigate(boardId+`/modify`);

    boardId
    return (
        <>
            <AppBar position="fixed" color="default" sx={{ bottom: 'auto', top: '64px', width:'calc(100% * 2/3)' }}>
                <Toolbar sx={{display: 'flex',p:2, alignItems:'center'}}>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}, textAlign:'center'}}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}, textAlign:'center'}}
                        >{board?.title}
                        </Typography>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}, textAlign:'center'}}
                        >{board?.description}
                        </Typography>

                    </Box>
                    <Button sx={{m: 0, p: 1, display: 'box', height: '48px'}} onClick={handleModifyBulletinPost}>
                        <p>Modify</p>
                    </Button>
                    <Divider/>
                </Toolbar>
            </AppBar>
            <Box sx={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 97px)'}}>
                <List sx={{m:0,p:0}}>
                    {
                        postRdos.map(postRdo => (
                            <BulletinPostItem key={postRdo.post.id} postRdo={postRdo}/>
                        ))
                    }
                </List>
                <Button onClick={handleNewBulletinPost} sx={{mt:'auto'}} >New Post</Button>
            </Box>

        </>
    )
};

