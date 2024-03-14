import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {FaqBoardSeekApi} from "~/apis";
import {Board} from "~/models";

export const useFaqBoardList = () => {
    //
    const {queryKey, queryFn} = FaqBoardSeekApi.query.findFaqBoards({});
    const {data, refetch}: UseQueryResult<QueryResponse<Board[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        boards: data?.queryResult || [],
        refetchBoards: refetch,
    }
}