import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { style } from './siteStyles/SiteStyle';
import { Home, Layout } from './containers';

// setup site styles
style.setDocumentHeaders();
const theme = style.createMuiTheme();

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
                <Home />
            </Layout>
        </ThemeProvider>
    );
}
