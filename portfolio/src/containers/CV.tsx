import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import { Box, ListItem, Typography, useMediaQuery, useTheme } from '@mui/material';

import { CVItem } from './CVItem';

export function CV() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box pb={1}>
                <Typography variant="h3" align="center" sx={{ textTransform: 'uppercase' }}>
                    Education
                </Typography>
            </Box>
            <Timeline position={isSmallScreen ? undefined : 'alternate'}>
                <CVItem year="2018 - 2022" title="2.1 Film and TV Production" subtitle="Wolverhampton University">
                    <Typography variant="body1">Degree focusing on all aspects of the Film and TV production industry, including Story Board Design, Filming, Acting and Editing. I was responsible for both solo projects and working within a team to create various media projects.</Typography>
                    <Typography variant="body1">I have a good knowledge of Adobe Creative Cloud editing software having used this extensively.</Typography>
                    <Typography variant="body1">For my final year project I created a short mockumentary titled &quot;The Escapades of Earl. E. Bird&quot;. This was very well received and gained one of the highest grades of the year. This was very well received and gained one of the highest grades of the year. This short film follows the titular charactor Earl. E. Bird as he attempts to solve an outstanding crime investigation.</Typography>
                    <Typography variant="body1">This degree has given me exposure to the media industry as well as given me valuable skills that can be applied in other sectors.</Typography>
                </CVItem>
                <CVItem year="2016 - 2018" title="A Level" subtitle="Stourbridge College">
                    <Typography variant="body1">Gained A Levels in Media Studies (B), English Language and Literature (B), Drama and Theatre Studies (A). I also studied Law for the first year which I later swapped for the Media Studies course.</Typography>
                </CVItem>

                <CVItem year="2010 - 2016" title="GCSE" subtitle="The Kingswinford School">
                    <Typography variant="body1">11 GCSEs including Maths (B), Science (BB) and English (BB).</Typography>
                </CVItem>
            </Timeline>

            <Box pb={1}>
                <Typography variant="h3" align="center" sx={{ textTransform: 'uppercase' }}>
                    Other Experience
                </Typography>
            </Box>
            <Timeline position={isSmallScreen ? undefined : 'alternate'}>
                <CVItem year="2016 - 2022" title="Acting Experience" subtitle="Acting Experience">
                    <Typography variant="body1">I have undertaken various acting auditions and stared in a few short productions.</Typography>
                </CVItem>
            </Timeline>
        </>
    );
}
