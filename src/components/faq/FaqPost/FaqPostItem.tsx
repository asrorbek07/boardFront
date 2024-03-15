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
import {useLocation, useNavigate} from "react-router-dom";
import {FaqPostRdo} from "~/models";
import {useFaqPostRemove} from "~/components/faq/hooks/useFaqPostRemove";

export const FaqPostItem = ({post})=>{
    const {enqueueSnackbar} = useSnackbar();
    const {mutation: {removeFaqPost},} = useFaqPostRemove();
    const navigate = useNavigate();
    const location = useLocation();
    console.log("Check")
    const onRemove =  async (postId: string) => {

        const onSuccess = async () => {
            const response = await removeFaqPost
                .mutateAsync({
                    postId:postId,
                }, {
                    onSuccess: () => enqueueSnackbar("FAQ Post has been removed successfully", {variant: 'success'}),
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
            <ListItem key={post.id} disablePadding>
                <ListItemButton  component="a">
                    <ListItemIcon>
                        <QuizIcon />
                    </ListItemIcon>
                    <ListItemText primary={post.title} secondary={post.content} />
                </ListItemButton>
                <Button onClick={()=>onRemove(post.id)}>
                    <DeleteIcon />
                </Button>
            </ListItem>
        </>
    )
}
