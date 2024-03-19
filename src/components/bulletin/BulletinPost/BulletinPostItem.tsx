import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import QuizIcon from "@mui/icons-material/Quiz";
import ListItemText from "@mui/material/ListItemText";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";
import * as React from "react";
import {useSnackbar} from "notistack";
import {useBulletinPostRemove} from "~/components";
import ThumbUpOffAlt from '@mui/icons-material/ThumbUpOffAlt';
import Visibility from '@mui/icons-material/Visibility';
import {Post, ReadCheck, ThumbUpRecord} from "~/models";

export const BulletinPostItem = ({postRdo})=>{

    const {enqueueSnackbar} = useSnackbar();
    const {mutation: {removeBulletinPost},} = useBulletinPostRemove();
    const post = postRdo.post as Post;
    const readChecks = postRdo.readChecks as ReadCheck[];
    const thumbUps = postRdo.thumbUps as ThumbUpRecord[];
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
            <ListItem key={postRdo.post.id} disablePadding sx={{ width: '70%',my:4,mx:'auto'}}>
                <Card sx={{ width: '100%', p:2}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {post.content}
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Button size="small">
                            <ThumbUpOffAlt/>
                            {thumbUps.length}
                        </Button>
                        <Button size="small">
                            <Visibility/>
                            {readChecks.length}
                        </Button>
                        <Button size="small" onClick={()=>onRemove(post.id)}>
                            <DeleteIcon sx={{ height: '100%'}} />
                        </Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </ListItem>
        </>
    )
}
