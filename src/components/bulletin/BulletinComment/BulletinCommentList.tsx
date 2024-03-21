import {BulletinCommentCreate} from "~/components/bulletin/BulletinComment/BulletinCommentCreate";
import {useBulletinCommentList, useBulletinPost} from "~/components";
import {BulletinCommentItem} from "~/components/bulletin/BulletinComment/BulletinCommentItem";
import List from "@mui/material/List";

export const BulletinCommentList = ({ postId }) => {
    const {postRdo,refetchPostRdo} = useBulletinPost(postId);
    const {commentRdos,refetchCommentRdos} = useBulletinCommentList(postId);
    const post = postRdo?.post;

    return(
        <>
            <BulletinCommentCreate postId={postId}/>
            <List sx={{p:0,pt:1}}>
                {commentRdos.map(commentRdo => (
                    <BulletinCommentItem post={post} commentRdo={commentRdo} refetchCommentRdos={refetchCommentRdos}/>
                ))}
            </List>
        </>
    )

}