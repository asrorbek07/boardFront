import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinReplyFlowApi} from "~/apis";

export const useBulletinReplyRegister = () => {
    //
    return {
        mutation: {
            registerBulletinReply: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinReplyFlowApi.registerBulletinReply>
            >(BulletinReplyFlowApi.registerBulletinReply as any, {}),
        },
    }
}