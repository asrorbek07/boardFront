import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {BulletinBoardSeekApi} from "~/apis";
import {Board} from "~/models";

export const useBulletinBoardList = () => {
    //
    const {queryKey, queryFn} = BulletinBoardSeekApi.query.findBulletinBoards({});
    const {data, refetch}: UseQueryResult<QueryResponse<Board[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        boards: data?.queryResult || [],
        refetchBoards: refetch,
    }
}