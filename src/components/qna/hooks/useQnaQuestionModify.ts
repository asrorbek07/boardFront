import {useMutation} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {QnaQuestionFlowApi} from "~/apis";

export const useQnaQuestionModify = () => {
    //
    return {
        mutation: {
            modifyQnaQuestion: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaQuestionFlowApi.modifyQnaQuestion>
            >(QnaQuestionFlowApi.modifyQnaQuestion as any),
        },
    }
}