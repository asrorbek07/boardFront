import {useMutation} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {FaqBoardFlowApi, FaqPostFlowApi} from "~/apis";

export const useFaqPost = () => {
    //
    return {
        mutation: {
            registerFaqPost: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof FaqPostFlowApi.registerFaqPost>
            >(FaqPostFlowApi.registerFaqPost as any),
        },
    }
}