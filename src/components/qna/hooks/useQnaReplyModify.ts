import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaReplyFlowApi} from "~/apis";

export const useQnaReplyModify = () => {
    //
    return {
        mutation: {
            modifyQnaReply: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaReplyFlowApi.modifyQnaReply>
            >(QnaReplyFlowApi.modifyQnaReply as any, {}),
        },
    }
}