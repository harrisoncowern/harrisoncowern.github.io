import * as React from 'react';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { Box } from '@mui/material';

export function SocialIcons() {
    return (
        <Box display="flex">
            <Box px={0.5}>
                <Facebook />
            </Box>
            <Box px={0.5}>
                <Twitter />
            </Box>
            <Box px={0.5}>
                <YouTube />
            </Box>
            <Box px={0.5}>
                <Instagram />
            </Box>
        </Box>
    );
}
