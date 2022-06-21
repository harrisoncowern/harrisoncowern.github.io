import * as React from 'react';
import { Box, Container } from '@mui/material';
import CSS from 'csstype';

import { Footer, Header } from './';

const bodyContainer: CSS.Properties = {
    flexDirection: 'column',
    display: 'flex',
    flex: '1 0 auto',
};

type LayoutProps = { children: React.ReactNode };

export function Layout(props: LayoutProps) {
    return (
        <Box
            style={{
                minHeight: '100vh',
                flexDirection: 'column',
                display: 'flex',
                flex: '1 1 auto',
            }}
        >
            <Header />
            <Box style={bodyContainer}>
                <Container maxWidth="xl" style={bodyContainer}>
                    <Box>{props.children}</Box>
                </Container>
            </Box>
            <Footer />
        </Box>
    );
}
