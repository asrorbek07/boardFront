import {
    Box,
    Button,
    Card,
    TextField,
    Typography,
} from '@mui/material';
import {BulletinCommentCdo, FaqPostCdo} from '~/models';
import {useSnackbar} from 'notistack';

import {Controller, useForm} from 'react-hook-form';
import {useBulletinCommentRegister, useBulletinPostRegister,} from '../hooks';
import {useParams} from "react-router-dom";
import {LoadingButton} from "@mui/lab";
import React from "react";


export const BulletinCommentCreate = (
    {
        postId,
        refetchCommentRdos,
    }: {
        postId:string;
        refetchCommentRdos:()=>void;
    }
) => {
    const { enqueueSnackbar } = useSnackbar();
    const {mutation: {registerBulletinComment},} = useBulletinCommentRegister();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<Partial<BulletinCommentCdo>>({
        defaultValues: {
            text: '',
            postId: postId,
        },
    });

    const handleMutate = async (data, e) => {
        const response = await registerBulletinComment
            .mutateAsync({
                text: data.text,
                postId: postId,
            })
            .catch((e) => {
                enqueueSnackbar(e.message, {variant: 'error'});
            });
        e.target.reset();
        refetchCommentRdos();
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
                            loading={registerBulletinComment.isLoading}
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

