import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {NoticeBoardSeekApi} from "~/apis";
import {Board} from "~/models";

export const useNoticeBoardList = () => {
    //
    const {queryKey, queryFn} = NoticeBoardSeekApi.query.findNoticeBoards({});
    const {data, refetch}: UseQueryResult<QueryResponse<Board[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        boards: data?.queryResult || [],
        refetchBoards: refetch,
    }
}