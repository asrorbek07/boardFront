import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {NoticePostSeekApi} from "~/apis";
import {NoticePostRdo} from "~/models";

export const useNoticePost = (postId: string | undefined) => {
    //
    const {queryKey, queryFn} = NoticePostSeekApi.query.findNoticePost({postId:postId});
    const {data, refetch}: UseQueryResult<QueryResponse<NoticePostRdo>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        postRdo: data?.queryResult,
        refetchPostRdo: refetch,
    }
}