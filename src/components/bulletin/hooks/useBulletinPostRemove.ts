import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinPostFlowApi} from "~/apis";

export const useBulletinPostRemove = () => {
    //
    return {
        mutation: {
            removeBulletinPost: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinPostFlowApi.removeBulletinPost>
            >(BulletinPostFlowApi.removeBulletinPost as any, {}),
        },
    }
}