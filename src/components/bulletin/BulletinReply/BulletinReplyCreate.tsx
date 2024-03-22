import {
    Box,
    Button,
    Card,
    TextField,
    Typography,
} from '@mui/material';
import {BulletinCommentCdo, BulletinReplyCdo, FaqPostCdo} from '~/models';
import {useSnackbar} from 'notistack';

import {Controller, useForm} from 'react-hook-form';
import {useBulletinCommentRegister, useBulletinPostRegister, useBulletinReplyRegister,} from '../hooks';
import {useParams} from "react-router-dom";
import {LoadingButton} from "@mui/lab";
import React from "react";


export const BulletinReplyCreate = (
    {
        commentId,
        refetchReplyRdos,
    }: {
        commentId:string;
        refetchReplyRdos:()=>void;
    }
) => {
    const { enqueueSnackbar } = useSnackbar();
    const {mutation: {registerBulletinReply},} = useBulletinReplyRegister();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<Partial<BulletinReplyCdo>>({
        defaultValues: {
            text: '',
            commentId: commentId,
        },
    });

    const handleMutate = async (data,e) => {
        const response = await registerBulletinReply
            .mutateAsync({
                text: data.text,
                commentId: commentId,
            })
            .catch((e) => {
                enqueueSnackbar(e.message, {variant: 'error'});
            });
        e.target.reset();
        refetchReplyRdos();
    };
    return (
            <form onSubmit={handleSubmit(handleMutate)}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '10px',
                        py:1,
                            }}>
                        <Controller
                            name="text"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    fullWidth
                                    label="Text"
                                    error={!!errors?.text}
                                    helperText={(errors?.text?.type === 'required' && "Text is required.") ||
                                        (errors?.text?.type === 'maxLength' && "Text must be less than 2000 characters.")}
                                    inputProps={{ maxLength: 2000 }}
                                />
                            )}
                        />
                        <LoadingButton
                            loading={registerBulletinReply.isLoading}
                            variant="contained"
                            color="primary"
                            type={"submit"}
                        >
                            Save
                        </LoadingButton>
                    </Box>
            </form>
    );
};

