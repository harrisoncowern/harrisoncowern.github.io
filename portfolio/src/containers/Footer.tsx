import * as React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

import { style } from '../siteStyles';

import { SocialIcons } from './SocialIcons';

export function Footer() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box display="flex" flexWrap="wrap" bgcolor={style.footerClass.backgroundColor} color={style.footerClass.color} width={1} justifyContent="center" alignItems="center" textAlign={isSmallScreen ? 'center' : 'start'} p={5} mt={3}>
            <Box flexGrow={1}>
                {'Copyright © Harrison Cowern '} {new Date().getFullYear()}
            </Box>
            <SocialIcons />
        </Box>
    );
}
