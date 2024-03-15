import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {NoticePostFlowApi} from "~/apis";

export const useNoticePostRemove = () => {
    //
    return {
        mutation: {
            removeNoticePost: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof NoticePostFlowApi.removeNoticePost>
            >(NoticePostFlowApi.removeNoticePost as any, {}),
        },
    }
}