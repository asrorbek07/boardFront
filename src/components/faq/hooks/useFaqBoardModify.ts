import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {FaqBoardFlowApi} from "~/apis";

export const useFaqBoardModify = () => {
    //
    return {
        mutation: {
            modifyFaqBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof FaqBoardFlowApi.modifyFaqBoard>
            >(FaqBoardFlowApi.modifyFaqBoard as any, {}),
        },
    }
}