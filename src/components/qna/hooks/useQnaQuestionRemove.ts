import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaQuestionFlowApi} from "~/apis";

export const useQnaQuestionRemove = () => {
    //
    return {
        mutation: {
            removeQnaQuestion: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaQuestionFlowApi.registerQnaQuestion>
            >(QnaQuestionFlowApi.removeQnaQuestion as any, {}),
        },
    }
}