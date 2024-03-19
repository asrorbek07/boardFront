import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import QuizIcon from "@mui/icons-material/Quiz";
import ListItemText from "@mui/material/ListItemText";
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import {useSnackbar} from "notistack";
import {useFaqBoardRemove} from "~/components";
import {useNavigate} from "react-router-dom";
import {useBulletinBoardRemove} from "~/components/bulletin/hooks/useBulletinBoardRemove";
import {Board} from "~/models";
import {DashboardSharp} from "@mui/icons-material";

export const BulletinBoardItem = ({board, onClick} : {board: Board, onClick: (boardId:string) => void})=>{
    const {enqueueSnackbar} = useSnackbar();
    const {mutation: {removeBulletinBoard},} = useBulletinBoardRemove();
    const navigate = useNavigate();
    const onRemove =  async (boardId: string) => {

        const onSuccess = async () => {
            const response = await removeBulletinBoard
                .mutateAsync({
                    boardId:boardId,
                }, {
                    onSuccess: () => enqueueSnackbar("Bulletin Board has been removed successfully", {variant: 'success'}),
                })
                .catch((e) => {
                    console.log(e)
                    enqueueSnackbar(e.message, {variant: 'error'});
                });
        }
        if (confirm('Are you sure want to remove?')) await onSuccess()
    };

    return(
            <ListItem key={board.id} disablePadding>
                <ListItemButton  component="a" onClick={() => onClick(board.id)}>
                    <ListItemIcon>
                        <DashboardSharp />
                    </ListItemIcon>
                    <ListItemText primary={board.title} />
                </ListItemButton>
                <Button sx={{m:0,p:1, display:'box', height:'48px'}} onClick={()=>onRemove(board.id)}>
                    <DeleteIcon/>
                </Button>
            </ListItem>
    )
}
