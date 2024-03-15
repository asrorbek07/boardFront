import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaBoardFlowApi} from "~/apis";

export const useQnaBoardRegister = () => {
    //
    return {
        mutation: {
            registerQanBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaBoardFlowApi.registerQanBoard>
            >(QnaBoardFlowApi.registerQanBoard as any, {}),
        },
    }
}