import * as React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

interface IProps {
    image: string;
    title: string;
    body: string;
}

export function ProjectItem(props: IProps) {
    return (
        <Card>
            {props.image != '' && <CardMedia component="img" image={props.image} alt="random" />}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h4">{props.title}</Typography>
                <Typography variant="body1">{props.body}</Typography>
            </CardContent>
        </Card>
    );
}
