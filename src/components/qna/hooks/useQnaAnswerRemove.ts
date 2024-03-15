import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaAnswerFlowApi} from "~/apis";

export const useQnaAnswerRemove = () => {
    //
    return {
        mutation: {
            registerQnaAnswer: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaAnswerFlowApi.registerQnaAnswer>
            >(QnaAnswerFlowApi.removeQnaAnswer as any, {}),
        },
    }
}