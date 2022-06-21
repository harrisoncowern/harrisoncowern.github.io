import * as React from 'react';
import ReactPlayer from 'react-player';
import { Box, Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';

interface IProps {
    image?: string;
    video?: string;
    title: string;
    body: string;
}

export function ProjectItem(props: IProps) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const hasImage = (props.image ?? '') != '';
    const hasVideo = (props.video ?? '') != '';

    return (
        <Box py={2}>
            <Card>
                {hasVideo && (
                    <Box width={1} display="flex" justifyContent="center" p={1}>
                        <ReactPlayer url={props.video} />
                    </Box>
                )}
                <Box display="flex" flexWrap="wrap">
                    <Box width={isSmallScreen || !hasImage ? 1 : 1 / 2}>
                        <CardContent>
                            <Typography variant="h4">{props.title}</Typography>
                            <Typography variant="body1">{props.body}</Typography>
                        </CardContent>
                    </Box>
                    <Box width={isSmallScreen || !hasImage ? 1 : 1 / 2} p={1}>
                        {hasImage && <CardMedia component="img" image={props.image} alt="random" />}
                    </Box>
                </Box>
            </Card>
        </Box>
    );
}
