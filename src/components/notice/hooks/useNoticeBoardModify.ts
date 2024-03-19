import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {NoticeBoardFlowApi} from "~/apis";

export const useNoticeBoardModify = () => {
    //
    return {
        mutation: {
            modifyNoticeBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof NoticeBoardFlowApi.modifyNoticeBoard>
            >(NoticeBoardFlowApi.modifyNoticeBoard as any, {}),
        },
    }
}