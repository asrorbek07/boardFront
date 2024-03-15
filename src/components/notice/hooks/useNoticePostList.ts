import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {NoticePostSeekApi} from "~/apis";
import {NoticePostRdo} from "~/models";

export const useNoticePostList = (boardId:string|undefined) => {
    //
    const {queryKey, queryFn} = NoticePostSeekApi.query.findNoticePosts({boardId:boardId});
    const {data, refetch}: UseQueryResult<QueryResponse<NoticePostRdo[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        postRdos: data?.queryResult || [],
        refetchPostRdos: refetch,
    }
}