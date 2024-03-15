import {useMutation} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {FaqPostFlowApi} from "~/apis";

export const useFaqPostRegister = () => {
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