import { StackProps } from '@mui/material';
import React from 'react';
interface Props extends StackProps {
    dense?: boolean;
    actions?: React.ReactNode;
    rowCount: number;
    numSelected: number;
    onSelectAllRows: (checked: boolean) => void;
}
export default function TableSelectedActions({ dense, actions, rowCount, numSelected, onSelectAllRows, sx, ...other }: Props): React.JSX.Element;
export {};
