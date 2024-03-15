import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {FaqPostFlowApi} from "~/apis";

export const useFaqPostRemove = () => {
    //
    return {
        mutation: {
            removeFaqPost: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof FaqPostFlowApi.removeFaqPost>
            >(FaqPostFlowApi.removeFaqPost as any, {}),
        },
    }
}