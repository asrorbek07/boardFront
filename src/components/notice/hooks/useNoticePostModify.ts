import {useMutation} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {NoticePostFlowApi} from "~/apis";

export const useNoticePostModify = () => {
    //
    return {
        mutation: {
            modifyNoticePost: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof NoticePostFlowApi.modifyNoticePost>
            >(NoticePostFlowApi.modifyNoticePost as any),
        },
    }
}