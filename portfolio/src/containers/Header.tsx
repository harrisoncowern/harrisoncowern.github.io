import * as React from 'react';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { style } from '../siteStyles';

export function Header() {
    return (
        <Box mb={3}>
            <AppBar position="static" color="secondary" style={style.headerClass}>
                <Toolbar>
                    <a href="/">
                        <div
                            style={{
                                display: 'block',
                                verticalAlign: 'middle',
                                height: 0,
                                width: 160,
                                marginTop: '-0.25rem',
                                padding: '28.5714% 0 0',
                                background: `url(${style.headerLogo}) no-repeat center center/contain`,
                            }}
                        />
                    </a>
                    <Box width={1} display="flex" alignItems="center" pl={2}>
                        <Box flexGrow={1}>
                            <Typography variant="h4">Harrison Cowern Portfolio</Typography>
                        </Box>
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
                </Toolbar>
            </AppBar>
        </Box>
    );
}
