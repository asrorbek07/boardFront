import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinCommentFlowApi} from "~/apis";

export const useBulletinCommentRemove = () => {
    //
    return {
        mutation: {
            removeBulletinComment: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinCommentFlowApi.removeBulletinComment>
            >(BulletinCommentFlowApi.removeBulletinComment as any, {}),
        },
    }
}