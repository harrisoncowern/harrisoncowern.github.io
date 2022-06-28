import * as React from 'react';
import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface IProps {
    year: string;
    title: string;
    subtitle: string;
}

export function CVItem(props: React.PropsWithChildren<IProps>) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <TimelineItem>
            {isSmallScreen && <TimelineOppositeContent sx={{ display: 'none' }} />}
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h3">{props.year}</Typography>
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            padding: 0,
                            textTransform: 'uppercase',
                        }}
                    >
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1">
                        <strong>{props.subtitle}</strong>
                    </Typography>
                    {props.children}
                </Box>
            </TimelineContent>
        </TimelineItem>
    );
}
