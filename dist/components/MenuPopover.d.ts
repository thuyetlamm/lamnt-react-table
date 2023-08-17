import { PopoverProps } from '@mui/material';
import React from 'react';
declare type Arrow = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'left-top' | 'left-center' | 'left-bottom' | 'right-top' | 'right-center' | 'right-bottom';
interface Props extends PopoverProps {
    arrow?: Arrow;
    disabledArrow?: boolean;
}
export default function MenuPopover({ children, arrow, disabledArrow, sx, ...other }: Props): React.JSX.Element;
export {};
