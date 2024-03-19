import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import QuizIcon from "@mui/icons-material/Quiz";
import ListItemText from "@mui/material/ListItemText";
import {Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import {useSnackbar} from "notistack";
import {
    useBulletinCommentRemove,
    useBulletinPostRemove,
    useBulletinReplyList,
    useBulletinReplyRemove
} from "~/components";
import {useParams} from "react-router-dom";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

export const BulletinReplyItem = ({replyRdo})=>{

    const reply = replyRdo.reply;
    const thumbUps = replyRdo.thumbUps;
    const {enqueueSnackbar} = useSnackbar();
    const params = useParams<{boardId:string,postId:string}>();
    const {mutation: {removeBulletinReply},} = useBulletinReplyRemove();
    const onRemove =  async (replyId: string) => {

        const onSuccess = async () => {
            const response = await removeBulletinReply
                .mutateAsync({
                    replyId:replyId,
                }, {
                    onSuccess: () => enqueueSnackbar("Bulletin Comment has been removed successfully", {variant: 'success'}),
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
            <ListItem key={reply.id} disablePadding>

                <ListItemText primary={reply.text} secondary={'Likes '+thumbUps.length} />
                <Button sx={{ height: '100%'}} onClick={()=>onRemove(reply.id)}>
                    <DeleteIcon sx={{ height: '100%'}} />
                </Button>
            </ListItem>
        </>
    )
}
