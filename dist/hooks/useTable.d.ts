/// <reference types="react" />
export declare type UseTableProps = {
    dense: boolean;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    rowsPerPage: number;
    order: 'asc' | 'desc';
    orderBy: string;
    selected: string[];
    setSelected: React.Dispatch<React.SetStateAction<string[]>>;
    onSelectRow: (id: string) => void;
    onSelectAllRows: (checked: boolean, newSelecteds: string[]) => void;
    onSort: (id: string) => void;
    onChangePage: (event: unknown, newPage: number) => void;
    onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare type Props = {
    defaultDense?: boolean;
    defaultOrder?: 'asc' | 'desc';
    defaultOrderBy?: string;
    defaultSelected?: string[];
    defaultRowsPerPage?: number;
    defaultCurrentPage?: number;
};
export default function useTable(props?: Props): {
    dense: boolean;
    order: "asc" | "desc";
    page: number;
    setPage: import("react").Dispatch<import("react").SetStateAction<number>>;
    orderBy: string;
    rowsPerPage: number;
    selected: string[];
    setSelected: import("react").Dispatch<import("react").SetStateAction<string[]>>;
    onSelectRow: (id: string) => void;
    onSelectAllRows: (checked: boolean, newSelecteds: string[]) => void;
    onSort: (id: string) => void;
    onChangePage: (event: unknown, newPage: number) => void;
    onChangeDense: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare function descendingComparator<T>(a: T, b: T, orderBy: keyof T): 0 | 1 | -1;
export declare function getComparator<Key extends keyof any>(order: 'asc' | 'desc', orderBy: Key): (a: {
    [key in Key]: number | string;
}, b: {
    [key in Key]: number | string;
}) => number;
export declare function emptyRows(page: number, rowsPerPage: number, arrayLength: number): number;
