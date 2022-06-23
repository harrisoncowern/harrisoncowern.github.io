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
                <Typography variant="body1">I am a creative design graduate with a passion for story driven content, possessing considerable experience with all aspects of a media project`s lifecycle, both in front and begind the camera.</Typography>
                <br />
                <Typography variant="body1">My strengths include Story Board Design, Filming, Acting and Editing, which I have used to successfully complete several media projects. I have a drive which allows me to thrive working both within a team and on individual projects. I always strive to push myself and keep my technical knowledge up to date. </Typography>
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
