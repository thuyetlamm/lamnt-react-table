import { BoxProps } from '@mui/material';
import React from 'react';
interface Props extends BoxProps {
    title: string;
    img?: string;
    description?: string;
}
export default function EmptyContent({ title, description, img, ...other }: Props): React.JSX.Element;
export {};
