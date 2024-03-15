import {useMutation} from "@tanstack/react-query";
import {CommandResponse, FirstParameter} from "@vizendjs/accent";
import {AxiosResponse} from "axios";
import {BulletinBoardFlowApi} from "~/apis";

export const useBulletinBoardRemove = () => {
    //
    return {
        mutation: {
            removeBulletinBoard: useMutation<
                AxiosResponse<CommandResponse>,
                unknown,
                FirstParameter<typeof BulletinBoardFlowApi.removeBulletinBoard>
            >(BulletinBoardFlowApi.removeBulletinBoard as any, {}),
        },
    }
}