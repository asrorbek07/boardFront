import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {BulletinBoardSeekApi} from "~/apis";
import {Board} from "~/models";

export const useBulletinBoard = (boardId: string | undefined) => {
    //
    const {queryKey, queryFn} = BulletinBoardSeekApi.query.findBulletinBoard({boardId:boardId});
    const {data, refetch}: UseQueryResult<QueryResponse<Board>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        board: data?.queryResult,
        refetchBoard: refetch,
    }
}