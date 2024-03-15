import * as React from 'react';
import {BulletinBoardItem, FaqBoardItem, useFaqBoardList,} from "~/components";
import {Button, Stack} from "@mui/material";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import {useBulletinBoardList} from "~/components/bulletin/hooks/useBulletinBoardList";
export const BulletinBoardList = (
    {
        onNewBoard,
    }: {
        onNewBoard: () => void;
    }
) => {

    const { boards } =  useBulletinBoardList();
    return (
        <Stack>
            <Box sx={{ width: '30%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Button onClick={onNewBoard}>New Bulletin Board</Button>
                <nav aria-label="main mailbox folders">
                    <List>
                {
                    boards.map(board => (
                        <BulletinBoardItem key={board.id} board={board}/>
                    ))
                }
                    </List>
                </nav>
            </Box>
        </Stack>
    )
};

