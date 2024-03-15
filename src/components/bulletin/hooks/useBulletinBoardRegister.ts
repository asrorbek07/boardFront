import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinBoardFlowApi} from "~/apis";

export const useBulletinBoardRegister = () => {
    //
    return {
        mutation: {
            registerBulletinBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinBoardFlowApi.registerBulletinBoard>
            >(BulletinBoardFlowApi.registerBulletinBoard as any, {}),
        },
    }
}