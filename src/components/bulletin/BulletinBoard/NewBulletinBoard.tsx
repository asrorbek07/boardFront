import {Box, Button, Card, TextField, Typography,} from '@mui/material';
import {LoadingButton} from '@mui/lab';

import {BulletinBoardCdo, FaqBoardCdo} from '~/models';
import {useSnackbar} from 'notistack';

import {Controller, useForm} from 'react-hook-form';
import {useBulletinBoardRegister} from "~/components";

export const NewBulletinBoard = ({
                                onSaved,
                                onCancel,
                            }: {
    onSaved?: () => void;
    onCancel?: () => void;
}) => {
    const {enqueueSnackbar} = useSnackbar();
    const {
        mutation: {registerBulletinBoard},
    } = useBulletinBoardRegister();
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<Partial<BulletinBoardCdo>>({
        defaultValues: {
            title: '',
            description: '',
        },
    });

    const handleMutate = async (data) => {
        const onSuccess = async () => {
            const response = await registerBulletinBoard
                .mutateAsync({
                    title: data.title,
                    description: data.description,
                }, {
                    onSuccess: () => enqueueSnackbar("Bulletin Board has been registered successfully", {variant: 'success'}),
                })
                .catch((e) => {
                    console.log(e)
                    enqueueSnackbar(e.message, {variant: 'error'});
                });
            onSaved && onSaved();
        }
        if (confirm('Are you sure want to save?')) await onSuccess()
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
                        New BulletinBoard
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
                                        label={'Description'}
                                        error={!!errors?.description}
                                        helperText={
                                            errors?.description && 'Description is required.'}
                                        {...register('description', {required: true, maxLength: 20})}
                                    />
                                )}
                                name={'description'}
                                control={control}
                            />
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
                        <LoadingButton loading={registerBulletinBoard.isLoading} variant="contained" color="primary"
                                       type={'submit'}>
                            Add
                        </LoadingButton>
                    </Box>
                </Card>
            </form>
        </>
    );
};

