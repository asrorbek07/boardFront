import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {NoticeBoardFlowApi} from "~/apis";

export const useNoticeBoardRegister = () => {
    //
    return {
        mutation: {
            registerNoticeBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof NoticeBoardFlowApi.registerNoticeBoard>
            >(NoticeBoardFlowApi.registerNoticeBoard as any, {}),
        },
    }
}