import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaAnswerFlowApi} from "~/apis";

export const useQnaAnswerRegister = () => {
    //
    return {
        mutation: {
            registerQnaAnswer: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaAnswerFlowApi.registerQnaAnswer>
            >(QnaAnswerFlowApi.registerQnaAnswer as any, {}),
        },
    }
}