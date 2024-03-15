import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {QnaBoardSeekApi} from "~/apis";
import {Board} from "~/models";

export const useQnaBoard = (boardId: string | undefined) => {
    //
    const {queryKey, queryFn} = QnaBoardSeekApi.query.findQanBoard({boardId:boardId});
    const {data, refetch}: UseQueryResult<QueryResponse<Board>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        board: data?.queryResult,
        refetchBoard: refetch,
    }
}