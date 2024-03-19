import {Outlet, useNavigate} from "react-router-dom";
import React from "react";
import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";

export const Layout = () => {
    //
    const navigate = useNavigate();
    const navItems = [
        {
            title: 'Bulletin',
            path: '/bulletin',
        },
        {
            title: 'FAQ',
            path: '/faq',
        },
        {
            title: 'Notice',
            path: '/notice',
        },
        {
            title: 'Q&A',
            path: '/qna',
        }
    ];

    return (<>
        <AppBar component="nav">
            <Toolbar>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    Board
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item.path} sx={{ color: '#fff' }} onClick={() => navigate(item.path)}>
                            {item.title}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
        <Outlet/>
    </>)
}