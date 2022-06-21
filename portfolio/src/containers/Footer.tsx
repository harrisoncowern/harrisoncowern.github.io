import * as React from 'react';
import Box from '@mui/material/Box';

import { style } from '../siteStyles';

import { SocialIcons } from './SocialIcons';

export function Footer() {
    return (
        <Box display="flex" bgcolor={style.footerClass.backgroundColor} color={style.footerClass.color} width="100%" textAlign="center" p={5} mt={3}>
            <Box flexGrow={1}>
                {'Copyright © Harrison Cowern '} {new Date().getFullYear()} {'.'}
            </Box>
            <SocialIcons />
        </Box>
    );
}
