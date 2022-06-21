import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';

import { style } from '../siteStyles';

import { SocialIcons } from './SocialIcons';

export function Header() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box mb={3}>
            <AppBar position="static" color="secondary" style={style.headerClass}>
                <Toolbar>
                    <Box width={1} display="flex" justifyContent="center" alignItems="center" p={1} flexWrap="wrap">
                        <Box flexGrow={1}>
                            <Typography textAlign={isSmallScreen ? 'center' : 'start'} variant="h4" color={style.headerClass.color}>
                                Harrison Cowern Portfolio
                            </Typography>
                        </Box>
                        <SocialIcons />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
