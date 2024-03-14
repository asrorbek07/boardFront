import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {FaqBoardSeekApi} from "~/apis";
import {Board} from "~/models";

export const useFaqBoard = (boardId: string | undefined) => {
    //
    const {queryKey, queryFn} = FaqBoardSeekApi.query.findFaqBoard({boardId:boardId});
    const {data, refetch}: UseQueryResult<QueryResponse<Board>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        board: data?.queryResult || {},
        refetchBoard: refetch,
    }
}