import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaBoardFlowApi} from "~/apis";

export const useQnaBoardRemove = () => {
    //
    return {
        mutation: {
            removeQanBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaBoardFlowApi.removeQanBoard>
            >(QnaBoardFlowApi.removeQanBoard as any, {}),
        },
    }
}