import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {QnaAnswerSeekApi} from "~/apis";
import {QnaAnswerRdo} from "~/models";

export const useQnaAnswer = (answerId: string | undefined) => {
    //
    const {queryKey, queryFn} = QnaAnswerSeekApi.query.findQnaAnswer({answerId:answerId});
    const {data, refetch}: UseQueryResult<QueryResponse<QnaAnswerRdo>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        answerRdo: data?.queryResult,
        refetchAnswerRdo: refetch,
    }
}