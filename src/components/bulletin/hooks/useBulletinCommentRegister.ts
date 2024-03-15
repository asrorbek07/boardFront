import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinCommentFlowApi} from "~/apis";

export const useBulletinCommentRegister = () => {
    //
    return {
        mutation: {
            registerBulletinComment: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinCommentFlowApi.registerBulletinComment>
            >(BulletinCommentFlowApi.registerBulletinComment as any, {}),
        },
    }
}