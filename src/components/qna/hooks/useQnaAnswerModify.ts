import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaAnswerFlowApi} from "~/apis";

export const useQnaAnswerModify = () => {
    //
    return {
        mutation: {
            modifyQnaAnswer: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaAnswerFlowApi.modifyQnaAnswer>
            >(QnaAnswerFlowApi.modifyQnaAnswer as any, {}),
        },
    }
}