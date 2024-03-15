import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {BulletinPostSeekApi} from "~/apis";
import {BulletinPostRdo} from "~/models";

export const useBulletinPost = (postId: string | undefined) => {
    //
    const {queryKey, queryFn} = BulletinPostSeekApi.query.findBulletinPost({postId:postId});
    const {data, refetch}: UseQueryResult<QueryResponse<BulletinPostRdo>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        postRdo: data?.queryResult,
        refetchPostRdo: refetch,
    }
}