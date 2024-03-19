import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinBoardFlowApi} from "~/apis";

export const useBulletinBoardModify = () => {
    //
    return {
        mutation: {
            modifyBulletinBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinBoardFlowApi.modifyBulletinBoard>
            >(BulletinBoardFlowApi.modifyBulletinBoard as any, {}),
        },
    }
}