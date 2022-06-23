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

            <ProjectItem
                video="https://www.youtube.com/watch?v=k-b39P4EJyE"
                image={EarlEBird}
                title="Earl E Bird"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                repudiandae, rerum necessitatibus nisi mollitia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                repudiandae, rerum necessitatibus nisi mollitia."
            />

            <ProjectItem
                image="data:image/jpeg;base64,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"
                title="Project 2"
                body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                repudiandae, rerum necessitatibus nisi mollitia.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quas
                ipsa, laudantium totam perferendis possimus voluptatibus tenetur.
                Quasi voluptatibus, nam vitae eaque ad, officia laboriosam
                repudiandae, rerum necessitatibus nisi mollitia."
            />
        </>
    );
}
