import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinReplyFlowApi} from "~/apis";

export const useBulletinReplyModify = () => {
    //
    return {
        mutation: {
            modifyBulletinReply: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinReplyFlowApi.modifyBulletinReply>
            >(BulletinReplyFlowApi.modifyBulletinReply as any, {}),
        },
    }
}