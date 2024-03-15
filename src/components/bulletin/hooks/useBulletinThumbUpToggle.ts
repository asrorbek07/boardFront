import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinThumbUpFlowApi} from "~/apis";

export const useBulletinThumbUpToggle = () => {
    //
    return {
        mutation: {
            toggleBulletinThumbUp: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinThumbUpFlowApi.toggleBulletinThumbUp>
            >(BulletinThumbUpFlowApi.toggleBulletinThumbUp as any, {}),
        },
    }
}