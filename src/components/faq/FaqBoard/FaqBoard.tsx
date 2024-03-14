import * as React from 'react';
import {Button, Stack} from "@mui/material";
import Box from '@mui/material/Box';

import {useParams} from "react-router-dom";
import {useFaqBoard} from "~/components/faq/hooks/useFaqBoard";
import {Board} from "~/models";

export const FaqBoard = () => {

    const params = useParams<{boardId:string}>();
    const board = useFaqBoard(params.boardId).board;


    return (
        <Stack>
            <Box sx={{ width: '30%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <h1>
                  {board.title}
              </h1>
              <p>
                  {board.description}
              </p>
            </Box>
        </Stack>
    )
};

