import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {QnaReplySeekApi} from "~/apis";
import {QnaReplyRdo} from "~/models";

export const useQnaReplyList = (commentId:string|undefined) => {
    //
    const {queryKey, queryFn} = QnaReplySeekApi.query.findQnaReplies({commentId:commentId});
    const {data, refetch}: UseQueryResult<QueryResponse<QnaReplyRdo[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        replyRdos: data?.queryResult || [],
        refetchReplyRdos: refetch,
    }
}