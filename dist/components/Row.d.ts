import React from 'react';
declare type RowProps = {
    row: any;
    selected: boolean;
    onEditRow?: VoidFunction;
    onSelectRow: VoidFunction;
    onDeleteRow?: VoidFunction;
};
declare function Row({ row, selected, onEditRow, onSelectRow }: RowProps): React.JSX.Element;
export default Row;
