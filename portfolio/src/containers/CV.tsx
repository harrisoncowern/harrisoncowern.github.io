import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { Box, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';

import { CVItem } from './CVItem';

export function CV() {
    const theme = useTheme();

    return (
        <>
            <Box pb={1}>
                <Typography variant="h2" align="center" sx={{ textTransform: 'uppercase' }}>
                    Curriculum Vitae
                </Typography>
            </Box>
            <Timeline position="alternate">
                <CVItem
                    year="2022"
                    title="2.1 Media Degree"
                    subtitle="Wolverhampton University"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                    ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                    Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                    repudiandae, rerum necessitatibus nisi mollitia."
                />
                <CVItem
                    year="2018"
                    title="A Level"
                    subtitle="Stourbridge College"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                    ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                    Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                    repudiandae, rerum necessitatibus nisi mollitia."
                />
            </Timeline>
        </>
    );
}
