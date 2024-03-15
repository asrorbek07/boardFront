import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {BulletinCommentSeekApi} from "~/apis";
import {BulletinCommentRdo} from "~/models";

export const useBulletinComment = (commentId: string | undefined) => {
    //
    const {queryKey, queryFn} = BulletinCommentSeekApi.query.findBulletinComment({commentId:commentId});
    const {data, refetch}: UseQueryResult<QueryResponse<BulletinCommentRdo>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        commentRdo: data?.queryResult,
        refetchCommentRdo: refetch,
    }
}