import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {QnaThumbUpFlowApi} from "~/apis";

export const useQnaThumbUpToggle = () => {
    //
    return {
        mutation: {
            toggleQnaThumbUp: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof QnaThumbUpFlowApi.toggleQnaThumbUp>
            >(QnaThumbUpFlowApi.toggleQnaThumbUp as any, {}),
        },
    }
}