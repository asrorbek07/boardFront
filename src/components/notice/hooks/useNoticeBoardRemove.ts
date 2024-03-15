import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {NoticeBoardFlowApi} from "~/apis";

export const useNoticeBoardRemove = () => {
    //
    return {
        mutation: {
            removeNoticeBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof NoticeBoardFlowApi.removeNoticeBoard>
            >(NoticeBoardFlowApi.removeNoticeBoard as any, {}),
        },
    }
}