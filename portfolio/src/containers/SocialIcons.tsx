import * as React from 'react';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

import { style } from '../siteStyles';

export function SocialIcons() {
    return (
        <Box display="flex" alignItems="center">
            <Box pr={0.5}>
                <IconButton style={style.headerClass} aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCeJuEe3MpzaF1XcLoMBzQdg/null')}>
                    <YouTube />
                </IconButton>
            </Box>
            <Box px={0.5}>
                <IconButton style={style.headerClass} aria-label="Facebook.com" onClick={() => window.open('https://en-gb.facebook.com/')}>
                    <Facebook />
                </IconButton>
            </Box>
            <Box px={0.5}>
                <IconButton style={style.headerClass} aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/?lang=en')}>
                    <Twitter />
                </IconButton>
            </Box>
            <Box pl={0.5}>
                <IconButton style={style.headerClass} aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/')}>
                    <Instagram />
                </IconButton>
            </Box>
        </Box>
    );
}
