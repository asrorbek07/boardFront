import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinReplyFlowApi} from "~/apis";

export const useBulletinReplyRemove = () => {
    //
    return {
        mutation: {
            removeBulletinReply: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinReplyFlowApi.removeBulletinReply>
            >(BulletinReplyFlowApi.removeBulletinReply as any, {}),
        },
    }
}