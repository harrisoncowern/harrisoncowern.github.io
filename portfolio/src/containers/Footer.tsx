import * as React from 'react';
import Box from '@mui/material/Box';

import { style } from '../siteStyles';

export function Footer() {
    return (
        <Box bgcolor={style.footerClass.backgroundColor} color={style.footerClass.color} width="100%" textAlign="center" p={5} mt={3}>
            {'Copyright © Harrison Cowern '} {new Date().getFullYear()} {'.'}
        </Box>
    );
}
