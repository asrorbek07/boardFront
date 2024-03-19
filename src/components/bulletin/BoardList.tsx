import * as React from 'react';
import {BulletinBoardItem, FaqBoardItem, useFaqBoardList,} from "~/components";
import List from '@mui/material/List';
import {Board} from "~/models";
import {AppBar, Box, Button, Divider, Toolbar, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
export const BoardList = (
    {
        boards,
        onClickBoard,
    }: {
        boards:Board[];
        onClickBoard:(boardId)=> void;
    }
) => {
    const navigate = useNavigate();

    return (
        <>
            <AppBar color="default" sx={{ top: '64px', right:'auto', width:'calc(100% * 1/3)' }}>
                <Toolbar sx={{display: 'flex',p:2, alignItems:'center'}}>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                >Bulletin Board
                </Typography>
                <Button sx={{m: 0, p: 1, display: 'box', height: '48px'}} onClick={()=> { navigate('new')}}>
                    <p>Add</p>
                </Button>
                    <Divider/>
                </Toolbar>
            </AppBar>
            <List sx={{p:0,mt:12}}>
                {
                    boards.map(board => (
                        <BulletinBoardItem key={board.id} board={board} onClick={onClickBoard}/>
                    ))


                }
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec arcu vel elit vehicula luctus. Mauris pharetra nisl sed mi euismod, ut condimentum tellus consectetur. Vivamus eu magna vitae lorem varius aliquet. Nullam sit amet felis lectus. Phasellus euismod augue ut justo volutpat, vel commodo ipsum consectetur. Sed convallis nisi vitae justo ultricies, eget tincidunt urna venenatis. Integer vel leo vel risus dapibus varius. Donec vestibulum risus quis orci lacinia, ac blandit velit efficitur. Curabitur eget mauris nec eros fringilla consectetur. Maecenas vehicula sapien a libero finibus, ac ultrices neque commodo. Nulla a eros ac ante ullamcorper mollis. Nam non mauris eu dui dictum ultricies eu vel enim.

                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eleifend euismod urna sit amet tincidunt. Sed sed arcu sed nisl sagittis tincidunt. In at urna vitae purus efficitur fermentum. Ut quis purus sed nulla consectetur lacinia non at tellus. Quisque eget diam ullamcorper, faucibus odio non, lobortis dolor. Vestibulum vestibulum, libero id fringilla bibendum, libero nunc elementum ligula, vel ullamcorper tellus urna ut lorem. Etiam lobortis nunc ut pulvinar fermentum. Donec nec ligula ut felis efficitur vehicula sit amet eget erat. Fusce aliquam scelerisque mi vel volutpat. Nulla facilisi. Sed eget mauris tincidunt, laoreet lorem eu, luctus lectus. Curabitur id nisl consequat, dictum lacus vitae, pulvinar metus. Nam sit amet leo a mi facilisis pulvinar sit amet vitae justo. Sed ullamcorper vehicula neque, vel volutpat dui.

                Sed vitae placerat justo, at hendrerit massa. Curabitur sed justo tincidunt, vehicula felis eget, lacinia nisl. Sed interdum elit ac nibh fermentum, eu aliquam nisi ultrices. Nam ut libero nec justo sodales vehicula. Integer ut orci ac justo laoreet facilisis. Curabitur nec eleifend leo. Cras hendrerit, dolor sed ultricies ultricies, magna velit viverra magna, ac ultrices nisl quam id nunc. Vivamus luctus tortor euismod massa bibendum, at consequat velit dictum. In sagittis quam non arcu ultricies fringilla. Etiam tempus lectus at neque tempus convallis. Nunc nec ultricies leo. Maecenas congue ipsum vitae dolor dictum, in fermentum orci egestas. Sed vel pretium leo. Sed non leo fringilla, consequat turpis sit amet, accumsan orci.

                {/*Vivamus in mi sed turpis bibendum ultricies. Phasellus euismod, magna non aliquam sagittis, ligula elit malesuada lacus, ut tempus eros lectus eget nisl. Integer lobortis ipsum non pulvinar convallis. Vivamus ac purus et sapien scelerisque dignissim. Curabitur id dolor in nulla posuere lacinia. Vivamus ac orci eget ex vehicula tempus ac in elit. Sed dictum sagittis turpis, eget molestie ipsum tincidunt nec. Maecenas sit amet justo ut lectus placerat luctus nec at elit. Integer semper consectetur enim, eget fringilla ante feugiat eget. Integer congue velit quis metus tincidunt, a vehicula nisl dapibus. Curabitur a nunc eget arcu tincidunt luctus. Vivamus vehicula scelerisque tellus, at dignissim odio pellentesque nec. Vivamus elementum metus ac ipsum elementum, sit amet molestie libero fringilla. Sed eu eros vel mi tincidunt congue eget non libero. Sed ut consectetur dui.*/}

                {/*In vitae eleifend ipsum. Vivamus suscipit ante vel erat accumsan, at bibendum elit hendrerit. Quisque nec lacus nec libero bibendum vehicula. Ut volutpat a nulla a mattis. Proin accumsan eros eget lacus hendrerit venenatis. Nulla non libero ac sapien pretium ultricies. Integer vulputate sollicitudin massa vel suscipit. Donec venenatis turpis vel felis malesuada cursus. Etiam et felis justo. Sed vitae turpis nec eros rhoncus venenatis. Nullam fringilla efficitur massa, non ultrices sem aliquet vitae. Vivamus non odio in ipsum lacinia consequat.*/}

                {/*Pellentesque consectetur quam at arcu ultricies, ac venenatis neque vestibulum. Integer ac bibendum velit. Sed posuere mi id lectus egestas dignissim. Maecenas id venenatis libero. Integer semper, justo ac euismod commodo, odio metus tincidunt magna, vel suscipit urna ligula in quam. In vitae quam vel lacus rhoncus posuere. Phasellus non justo vel libero lacinia luctus eget a diam. Nulla facilisi. Suspendisse dapibus, nunc ac posuere sagittis, ex metus malesuada tellus, nec dignissim lacus velit in ligula. Phasellus ultrices velit at est luctus, et venenatis purus bibendum. Sed ac odio odio. Donec quis dolor risus. Nunc pulvinar nisi nec metus gravida, in fermentum velit euismod. Maecenas eget lobortis nulla. Curabitur et consequat tortor. Sed tempor, nulla ut sodales posuere, ex lacus molestie purus, id fringilla eros eros vel turpis.*/}

                {/*Suspendisse nec orci a erat semper ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut condimentum massa eu consectetur varius. In nec quam eget sem elementum ullamcorper. Vestibulum vehicula, velit eget ultrices commodo, magna nisi tincidunt metus, eu laoreet nisl nulla vel tortor. Cras ultricies leo nec dolor faucibus interdum. Quisque laoreet felis eget elit ultricies, sed elementum turpis consectetur. Sed sodales, magna a ultricies euismod, metus odio bibendum ligula, nec malesuada turpis ex sed tellus. Vivamus vel libero vel nunc vehicula tincidunt. Ut consectetur velit in libero scelerisque, ut venenatis risus ultricies. Integer varius lectus a dolor placerat, et*/}





            </List>
        </>
    )

};

