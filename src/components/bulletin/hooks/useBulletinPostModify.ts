import {useMutation} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {BulletinPostFlowApi} from "~/apis";

export const useBulletinPostModify = () => {
    //
    return {
        mutation: {
            modifyBulletinPost: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinPostFlowApi.modifyBulletinPost>
            >(BulletinPostFlowApi.modifyBulletinPost as any),
        },
    }
}