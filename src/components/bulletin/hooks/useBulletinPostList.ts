import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {BulletinPostSeekApi} from "~/apis";
import {BulletinPostRdo} from "~/models";

export const useBulletinPostList = (boardId:string|undefined) => {
    //
    const {queryKey, queryFn} = BulletinPostSeekApi.query.findBulletinPosts({boardId: boardId});
    const {data, refetch}: UseQueryResult<QueryResponse<BulletinPostRdo[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        postRdos: data?.queryResult || [],
        refetchPostRdos: refetch,
    }
}