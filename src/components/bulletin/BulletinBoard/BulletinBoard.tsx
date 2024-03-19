import * as React from 'react';
import {Button, Stack} from "@mui/material";
import Box from '@mui/material/Box';

import {useParams} from "react-router-dom";
import {useFaqBoard} from "~/components/faq/hooks/useFaqBoard";
import {Board, FaqPostRdo} from "~/models";
import {useFaqPostList} from "~/components/faq/hooks/useFaqPostList";
import List from "@mui/material/List";
import {FaqBoardItem, useBulletinBoard, useBulletinPostList} from "~/components";
import {FaqPostItem} from "~/components/faq/FaqPost/FaqPostItem";
import {useState} from "react";
import {BulletinPostItem} from "~/components/bulletin/BulletinPost/BulletinPostItem";

export const BulletinBoard = (props) => {
        const [boardId, setBoardId] = useState(props.boardId)
        const {board,} =useBulletinBoard(props.boardId);
        const {postRdos,} = useBulletinPostList(props.boardId);


    boardId
    return (
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Button onClick={props.onModifyBoard} >Modify Board</Button>
                <h1>
                  {board?.title}
              </h1>
              <p>
                  {board?.description}
              </p>

                <nav aria-label="main mailbox folders">
                    <List>
                        {
                            postRdos.map(postRdo => (
                                <BulletinPostItem key={postRdo.post.id} postRdo={postRdo}/>
                            ))
                        }
                    </List>
                    <Button onClick={props.onNewPost} >New Post</Button>
                </nav>
            </Box>
    )
};

