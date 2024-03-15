import * as React from 'react';
import {Button, Stack} from "@mui/material";
import Box from '@mui/material/Box';

import {useParams} from "react-router-dom";
import {useFaqBoard} from "~/components/faq/hooks/useFaqBoard";
import {Board, FaqPostRdo} from "~/models";
import {useFaqPostList} from "~/components/faq/hooks/useFaqPostList";
import List from "@mui/material/List";
import {FaqBoardItem} from "~/components";
import {FaqPostItem} from "~/components/faq/FaqPost/FaqPostItem";
import {useState} from "react";

export const FaqBoard = (
    {
        onNewPost,
    }: {
        onNewPost: () => void;
    }
) => {
    const params = useParams<{boardId:string}>();
    const {board,} = useFaqBoard(params.boardId);
    const {postRdos,} = useFaqPostList(params.boardId);
    console.log(board?.id);
    return (
        <Stack>
            <Box sx={{ width: '30%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <h1>
                  {board?.title}
              </h1>
              <p>
                  {board?.description}
              </p>

                <Button onClick={onNewPost} >New FAQ Post</Button>
                <nav aria-label="main mailbox folders">
                    <List>
                        {
                            postRdos.map(postRdo => (
                                <FaqPostItem key={postRdo.post.id} post={postRdo.post}/>
                            ))
                        }
                    </List>
                </nav>
            </Box>
        </Stack>
    )
};

