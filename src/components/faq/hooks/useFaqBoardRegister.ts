import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {FaqBoardFlowApi} from "~/apis";

export const useFaqBoardRegister = () => {
    //
    return {
        mutation: {
            registerFaqBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof FaqBoardFlowApi.registerFaqBoard>
            >(FaqBoardFlowApi.registerFaqBoard as any, {}),
        },
    }
}