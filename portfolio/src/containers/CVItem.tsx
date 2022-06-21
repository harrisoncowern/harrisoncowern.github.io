import * as React from 'react';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IProps {
    year: string;
    title: string;
    subtitle: string;
    body: string;
}

export function CVItem(props: IProps) {
    return (
        <TimelineItem>
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
                    <Typography variant="subtitle1">{props.subtitle}</Typography>
                    <Typography variant="body1">{props.body}</Typography>
                </Box>
            </TimelineContent>
        </TimelineItem>
    );
}
