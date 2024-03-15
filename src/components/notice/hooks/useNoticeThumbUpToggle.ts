import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {NoticeThumbUpFlowApi} from "~/apis";

export const useNoticeThumbUpToggle = () => {
    //
    return {
        mutation: {
            toggleNoticeThumbUp: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof NoticeThumbUpFlowApi.toggleNoticeThumbUp>
            >(NoticeThumbUpFlowApi.toggleNoticeThumbUp as any, {}),
        },
    }
}