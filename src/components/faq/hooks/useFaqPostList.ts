import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {QueryResponse} from "@vizendjs/accent";
import {FaqPostSeekApi} from "~/apis";
import {FaqPostRdo} from "~/models";

export const useFaqPostList = (boardId:string|undefined) => {
    //
    const {queryKey, queryFn} = FaqPostSeekApi.query.findFaqPosts({boardId:boardId});
    const {data, refetch}: UseQueryResult<QueryResponse<FaqPostRdo[]>> = useQuery({
        queryKey,
        queryFn,
    });
    return {
        postRdos: data?.queryResult || [],
        refetchPostRdos: refetch,
    }
}