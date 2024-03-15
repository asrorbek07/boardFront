import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {FaqPostSeekApi} from "~/apis";
import {FaqPostRdo} from "~/models";

export const useFaqPost = (postId: string | undefined) => {
    //
    const {queryKey, queryFn} = FaqPostSeekApi.query.findFaqPost({postId:postId});
    const {data, refetch}: UseQueryResult<QueryResponse<FaqPostRdo>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        postRdo: data?.queryResult,
        refetchPostRdo: refetch,
    }
}