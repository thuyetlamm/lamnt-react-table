import { SxProps } from '@mui/material';
import { ColumnHeader } from 'types/table';
import * as React from 'react';
interface Props {
    titleTable: string;
    sxTableContainer?: SxProps;
    dataTable: any[];
    columns: ColumnHeader[];
    emptyDataURLImage?: string;
    emptyTitle?: string;
}
export declare const ReactTableMaterial: ({ titleTable, dataTable, sxTableContainer, columns, emptyDataURLImage, emptyTitle }: Props) => React.JSX.Element;
export {};
