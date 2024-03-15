import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaReplyFlowApi} from "~/apis";

export const useQnaReplyRemove = () => {
    //
    return {
        mutation: {
            removeQnaReply: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaReplyFlowApi.removeQnaReply>
            >(QnaReplyFlowApi.removeQnaReply as any, {}),
        },
    }
}