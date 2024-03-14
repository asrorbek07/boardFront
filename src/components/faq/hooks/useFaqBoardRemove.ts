import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {FaqBoardFlowApi} from "~/apis";

export const useFaqBoardRemove = () => {
    //
    return {
        mutation: {
            removeFaqBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof FaqBoardFlowApi.removeFaqBoard>
            >(FaqBoardFlowApi.removeFaqBoard as any, {}),
        },
    }
}