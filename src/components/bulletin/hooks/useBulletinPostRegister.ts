import {useMutation} from "@tanstack/react-query";
import {AxiosResponse} from "axios";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {BulletinPostFlowApi} from "~/apis";

export const useBulletinPostRegister = () => {
    //
    return {
        mutation: {
            registerBulletinPost: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinPostFlowApi.registerBulletinPost>
            >(BulletinPostFlowApi.registerBulletinPost as any),
        },
    }
}