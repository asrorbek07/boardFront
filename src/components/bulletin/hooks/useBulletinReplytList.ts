import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {BulletinReplySeekApi} from "~/apis";
import {BulletinReplyRdo} from "~/models";

export const useBulletinReplyList = (commentId:string|undefined) => {
    //
    const {queryKey, queryFn} = BulletinReplySeekApi.query.findBulletinReplies({commentId:commentId});
    const {data, refetch}: UseQueryResult<QueryResponse<BulletinReplyRdo[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        replyRdos: data?.queryResult || [],
        refetchReplyRdos: refetch,
    }
}