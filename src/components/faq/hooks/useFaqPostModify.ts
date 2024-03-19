import {useMutation} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {FaqPostFlowApi} from "~/apis";

export const useFaqPostModify = () => {
    //
    return {
        mutation: {
            modifyFaqPost: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof FaqPostFlowApi.modifyFaqPost>
            >(FaqPostFlowApi.modifyFaqPost as any),
        },
    }
}