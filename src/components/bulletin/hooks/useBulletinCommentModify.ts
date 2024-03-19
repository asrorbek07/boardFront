import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinCommentFlowApi} from "~/apis";

export const useBulletinCommentModify = () => {
    //
    return {
        mutation: {
            modifyBulletinComment: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinCommentFlowApi.modifyBulletinComment>
            >(BulletinCommentFlowApi.modifyBulletinComment as any, {}),
        },
    }
}