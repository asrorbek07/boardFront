import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {QnaAnswerSeekApi} from "~/apis";
import {QnaAnswerRdo} from "~/models";

export const useQnaAnswerList = (questionId:string|undefined) => {
    //
    const {queryKey, queryFn} = QnaAnswerSeekApi.query.findQnaAnswers({questionId:questionId});
    const {data, refetch}: UseQueryResult<QueryResponse<QnaAnswerRdo[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        answerRdos: data?.queryResult || [],
        refetchAnswerRdos: refetch,
    }
}