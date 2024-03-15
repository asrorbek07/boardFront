import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {QnaBoardSeekApi} from "~/apis";
import {Board} from "~/models";

export const useQnaBoardList = () => {
    //
    const {queryKey, queryFn} = QnaBoardSeekApi.query.findQanBoards({});
    const {data, refetch}: UseQueryResult<QueryResponse<Board[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        boards: data?.queryResult || [],
        refetchBoards: refetch,
    }
}