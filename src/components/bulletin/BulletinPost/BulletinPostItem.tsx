import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import QuizIcon from "@mui/icons-material/Quiz";
import ListItemText from "@mui/material/ListItemText";
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import {useSnackbar} from "notistack";
import {useBulletinPostRemove, useFaqBoardRemove} from "~/components";
import {useLocation, useNavigate} from "react-router-dom";
import {FaqPostRdo} from "~/models";
import {useFaqPostRemove} from "~/components/faq/hooks/useFaqPostRemove";
import {useReducer} from "react";

export const BulletinPostItem = ({postRdo})=>{

    const {enqueueSnackbar} = useSnackbar();
    const {mutation: {removeBulletinPost},} = useBulletinPostRemove();
    const onRemove =  async (postId: string) => {

        const onSuccess = async () => {
            const response = await removeBulletinPost
                .mutateAsync({
                    postId:postId,
                }, {
                    onSuccess: () => enqueueSnackbar("Bulletin Post has been removed successfully", {variant: 'success'}),
                })
                .catch((e) => {
                    console.log(e)
                    enqueueSnackbar(e.message, {variant: 'error'});
                });
        }
        if (confirm('Are you sure want to remove?')) await onSuccess()
    };

    return(
        <>
            <ListItem key={postRdo.post.id} disablePadding>
                <ListItemButton sx={{ height: '100%'}}  component="a">
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary={postRdo.post.title} secondary={'Views '+postRdo.readChecks.length + '      Likes '+postRdo.thumbUps.length} />
                </ListItemButton>
                <Button sx={{ height: '100%'}} onClick={()=>onRemove(postRdo.post.id)}>
                    <DeleteIcon sx={{ height: '100%'}} />
                </Button>
            </ListItem>
        </>
    )
}
