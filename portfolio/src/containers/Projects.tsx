import * as React from 'react';
import { Box, Typography } from '@mui/material';

import EarlEBird from '../img/EarlEBird.jpg';

import { ProjectItem } from './ProjectItem';

export function Projects() {
    return (
        <>
            <Box pb={1}>
                <Typography variant="h3" align="center" sx={{ textTransform: 'uppercase' }}>
                    Projects
                </Typography>
            </Box>

            <ProjectItem video="https://www.youtube.com/watch?v=k-b39P4EJyE" image={EarlEBird} title="Earl E Bird" body='For my final year project I created a short mockumentary titled "The Escapades of Earl. E. Bird". This was very well received and gained one of the highest grades of the year. This short film follows the titular charactor Earl. E. Bird as he attempts to solve an outstanding case. This project allowed me to demostrate my skill at writing, directing and editing while staying true to the mockumentary style.' />

            <ProjectItem video="https://www.youtube.com/watch?v=ySZgDp_6IRw" title="Showreel" body="Outside of my degree I have also completed various media projects. Shown here is a showreel showcasing some of these pieces of work." />
        </>
    );
}
