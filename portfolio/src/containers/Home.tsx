import * as React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';

import { CV } from './CV';
import { Projects } from './Projects';

export function Home() {
    return (
        <Container disableGutters maxWidth="md">
            <Box pb={2}>
                <Box pb={1}>
                    <Typography variant="h3" align="center" sx={{ textTransform: 'uppercase' }}>
                        About Me
                    </Typography>
                </Box>
                <Typography variant="h5">A creative designer with a passion for content ... Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas ipsa, laudantium totam perferendis possimus voluptatibus tenetur. Quasi voluptatibus, nam vitae eaque ad, officia laboriosamrepudiandae, rerum necessitatibus nisi mollitia.</Typography>
            </Box>

            <Divider />

            <Box py={2}>
                <Projects />
            </Box>

            <Divider />

            <Box py={2}>
                <CV />
            </Box>
        </Container>
    );
}
