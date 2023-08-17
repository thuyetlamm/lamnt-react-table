import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/material';
import React from 'react';
declare type Props = {
    order?: 'asc' | 'desc';
    orderBy?: string;
    headLabel: any[];
    rowCount?: number;
    numSelected?: number;
    onSort?: (id: string) => void;
    onSelectAllRows?: (checked: boolean) => void;
    sx?: SxProps<Theme>;
};
export default function TableHeadCustom({ order, orderBy, rowCount, headLabel, numSelected, onSort, onSelectAllRows, sx }: Props): React.JSX.Element;
export {};
