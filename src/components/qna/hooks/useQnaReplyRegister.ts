import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaReplyFlowApi} from "~/apis";

export const useQnaReplyRegister = () => {
    //
    return {
        mutation: {
            registerQnaReply: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaReplyFlowApi.registerQnaReply>
            >(QnaReplyFlowApi.registerQnaReply as any, {}),
        },
    }
}