import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {NoticeBoardSeekApi} from "~/apis";
import {Board} from "~/models";

export const useNoticeBoard = (boardId: string | undefined) => {
    //
    const {queryKey, queryFn} = NoticeBoardSeekApi.query.findNoticeBoard({boardId:boardId});
    const {data, refetch}: UseQueryResult<QueryResponse<Board>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        board: data?.queryResult,
        refetchBoard: refetch,
    }
}