import {useMutation} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {QnaQuestionFlowApi} from "~/apis";

export const useQnaQuestionRegister = () => {
    //
    return {
        mutation: {
            registerQnaQuestion: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaQuestionFlowApi.registerQnaQuestion>
            >(QnaQuestionFlowApi.registerQnaQuestion as any),
        },
    }
}