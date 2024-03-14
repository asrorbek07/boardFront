import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SnackbarProvider} from 'notistack';
import React, {useMemo} from 'react';

export const Provider = ({children}: React.PropsWithChildren) => {
    const queryClient = useMemo(
        () => new QueryClient({
            defaultOptions: {queries: {refetchOnWindowFocus: false}},
        }),
        [],
    );
    return (
        <QueryClientProvider client={queryClient}>
            <SnackbarProvider
                maxSnack={3}
                // TransitionComponent={Fade}
                variant={'success'}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            >
                {children}
            </SnackbarProvider>
        </QueryClientProvider>
    );
};
export default Provider;
