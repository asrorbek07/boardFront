import {BulletinCommentCreate} from "~/components/bulletin/BulletinComment/BulletinCommentCreate";
import {useBulletinComment, useBulletinCommentList, useBulletinPost, useBulletinReplyList} from "~/components";
import {BulletinCommentItem} from "~/components/bulletin/BulletinComment/BulletinCommentItem";
import List from "@mui/material/List";
import {BulletinReplyCreate} from "~/components/bulletin/BulletinReply/BulletinReplyCreate";
import {BulletinReplyItem} from "~/components/bulletin/BulletinReply/BulletinReplyItem";
import {Post} from "~/models";

export const BulletinReplyList = (
    {
        commentId,
        post,
    }:{
        commentId:string;
        post?:Post;
    }
) => {
    const {commentRdo,refetchCommentRdo} = useBulletinComment(commentId);
    const {replyRdos,refetchReplyRdos} = useBulletinReplyList(commentId);
    const comment = commentRdo?.comment;

    return(
        <>
            <BulletinReplyCreate commentId={commentId} refetchReplyRdos={refetchReplyRdos}/>
            <List sx={{p:0,pt:1}}>
                {replyRdos.map(replyRdo => (
                    <BulletinReplyItem post={post} replyRdo={replyRdo} refetchReplyRdos={refetchReplyRdos}/>
                ))}
            </List>
        </>
    )

}