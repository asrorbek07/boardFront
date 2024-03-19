import * as React from 'react';
import {FaqBoardItem, useFaqBoardList, } from "~/components";
import {Button, Stack} from "@mui/material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
export const NoticeBoardList = (
    {
        onNewBoard,
    }: {
        onNewBoard: () => void;
    }
) => {

    const { boards } =  useFaqBoardList();
    console.log("Check")
    return (
        <Stack>
            <Box sx={{ width: '30%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Button onClick={onNewBoard}>New FAQ Boards</Button>
                <nav aria-label="main mailbox folders">
                    <List>
                {
                    boards.map(board => (
                        <FaqBoardItem key={board.id} board={board}/>
                    ))
                }
                    </List>
                </nav>
            </Box>
        </Stack>
    )
};

