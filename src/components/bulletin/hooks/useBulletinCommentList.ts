import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {BulletinCommentSeekApi} from "~/apis";
import {BulletinCommentRdo} from "~/models";

export const useBulletinCommentList = (postId:string|undefined) => {
    //
    const {queryKey, queryFn} = BulletinCommentSeekApi.query.findBulletinComments({postId:postId});
    const {data, refetch}: UseQueryResult<QueryResponse<BulletinCommentRdo[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        commentRdos: data?.queryResult || [],
        refetchCommentRdos: refetch,
    }
}