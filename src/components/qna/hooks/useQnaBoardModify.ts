import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaBoardFlowApi} from "~/apis";

export const useQnaBoardModify = () => {
    //
    return {
        mutation: {
            modifyQanBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaBoardFlowApi.modifyQanBoard>
            >(QnaBoardFlowApi.modifyQanBoard as any, {}),
        },
    }
}