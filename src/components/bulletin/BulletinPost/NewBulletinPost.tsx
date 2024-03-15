import {
    Box,
    Button,
    Card,
    TextField,
    Typography,
} from '@mui/material';
import {FaqPostCdo} from '~/models';
import {useSnackbar} from 'notistack';

import {Controller, useForm} from 'react-hook-form';
import {useBulletinPostRegister,} from '../hooks';
import {useParams} from "react-router-dom";


export const NewBulletinPost = ({
                               onSaved,
                               onCancel,
                           }: {
    onSaved?: () => void;
    onCancel?: () => void;
}) => {
    const {enqueueSnackbar} = useSnackbar();
    const params = useParams<{boardId:string}>();
    const {mutation: {registerBulletinPost},} = useBulletinPostRegister();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<Partial<FaqPostCdo>>({
        defaultValues: {
            title: '',
            content: '',
            boardId: params.boardId,
        },
    });

    const handleMutate = async (data) => {
        const onSuccess = async () => {
            const response = await registerBulletinPost
                .mutateAsync({
                    title: data.title,
                    content: data.content,
                    boardId: data.boardId,
                })
                .catch((e) => {
                    enqueueSnackbar(e.message, {variant: 'error'});
                });
            onSaved && onSaved();
        }
        if (confirm('Are you sure want to save?')) await onSuccess();
    };

    const handleCancel = () => onCancel && onCancel();

    return (
        <>
            <form onSubmit={handleSubmit(handleMutate)}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '20px',
                    }}
                >
                    <Typography>
                        New BulletinPost
                    </Typography>
                    <Button variant="text" color="primary" sx={{display: 'flex', gap: '8px'}} onClick={handleCancel}>
                        Back
                    </Button>
                </Box>

                <Card sx={{p: 3}}>
                    <Box
                        sx={{
                            display: 'flex',
                            borderRadius: '8px',
                            padding: '40px 120px',
                            paddingRight: 0,
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                padding: '40px 120px',
                                paddingRight: 0,
                                flexGrow: 1,
                            }}
                        >
                            <Controller
                                render={({field}) => (
                                    <TextField
                                        fullWidth
                                        label={'Title'}
                                        error={!!errors?.title}
                                        helperText={
                                            errors?.title && 'Title is required.'}
                                        {...register('title', {required: true, maxLength: 20})}
                                    />
                                )}
                                name={'title'}
                                control={control}
                            />
                            <Controller
                                render={({field}) => (
                                    <TextField
                                        fullWidth
                                        label={'Content'}
                                        error={!!errors?.content}
                                        helperText={
                                            errors?.content && 'Content is required.'}
                                        {...register('content', {required: true, maxLength: 20})}
                                    />
                                )}
                                name={'content'}
                                control={control}
                            />
                            {/*<Controller*/}
                            {/*    render={({field}) => (*/}
                            {/*        <TextField*/}
                            {/*            fullWidth*/}
                            {/*            label={'BoardId'}*/}
                            {/*            error={!!errors?.boardId}*/}
                            {/*            helperText={*/}
                            {/*                errors?.boardId && 'BoardId is required.'}*/}
                            {/*            {...register('boardId', {required: true, maxLength: 20})}*/}
                            {/*        />*/}
                            {/*    )}*/}
                            {/*    name={'boardId'}*/}
                            {/*    control={control}*/}
                            {/*/>*/}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            paddingTop: '30px',
                        }}
                    >
                        <Button variant="outlined" color="primary" onClick={handleCancel}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" type={'submit'}>
                            Add
                        </Button>
                    </Box>
                </Card>
            </form>
        </>
    );
};

