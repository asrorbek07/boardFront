import {useMutation} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {NoticePostFlowApi} from "~/apis";

export const useNoticePostRegister = () => {
    //
    return {
        mutation: {
            registerNoticePost: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof NoticePostFlowApi.registerNoticePost>
            >(NoticePostFlowApi.registerNoticePost as any),
        },
    }
}