import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {QnaQuestionSeekApi} from "~/apis";
import {QnaQuestionRdo} from "~/models";

export const useQnaQuestionList = (boardId:string|undefined) => {
    //
    const {queryKey, queryFn} = QnaQuestionSeekApi.query.findQnaQuestions({boardId:boardId});
    const {data, refetch}: UseQueryResult<QueryResponse<QnaQuestionRdo[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        questionRdos: data?.queryResult || [],
        refetchQuestionRdos: refetch,
    }
}