import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Home, Layout } from './containers';
import { style } from './siteStyles/SiteStyle';

// setup site styles
style.setDocumentHeaders();
const theme = style.createMuiTheme();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Home/>
      </Layout>
    </ThemeProvider>
  );
}
