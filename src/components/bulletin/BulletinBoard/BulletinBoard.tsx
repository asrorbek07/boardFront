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

export const BulletinBoard = (
    {
        onNewPost,
    }: {
        onNewPost: () => void;
    }
) => {
    const params = useParams<{boardId:string}>();
    const {board,} = useBulletinBoard(params.boardId);
    const {postRdos,} = useBulletinPostList(params.boardId);
    return (
        <Stack>
            <Box sx={{ width: '30%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <h1>
                  {board?.title}
              </h1>
              <p>
                  {board?.description}
              </p>

                <Button onClick={onNewPost} >New Bulletin Post</Button>
                <nav aria-label="main mailbox folders">
                    <List>
                        {
                            postRdos.map(postRdo => (
                                <BulletinPostItem key={postRdo.post.id} postRdo={postRdo}/>
                            ))
                        }
                    </List>
                </nav>
            </Box>
        </Stack>
    )
};

