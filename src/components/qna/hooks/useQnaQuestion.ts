import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {QnaQuestionSeekApi} from "~/apis";
import {QnaQuestionRdo} from "~/models";

export const useQnaQuestion = (questionId: string | undefined) => {
    //
    const {queryKey, queryFn} = QnaQuestionSeekApi.query.findQnaQuestion({questionId:questionId});
    const {data, refetch}: UseQueryResult<QueryResponse<QnaQuestionRdo>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        questionRdo: data?.queryResult,
        refetchQuestionRdo: refetch,
    }
}