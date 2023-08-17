import React from 'react';
declare type Props = {
    actions: React.ReactNode;
    open?: HTMLElement | null;
    onClose?: VoidFunction;
    onOpen?: (event: React.MouseEvent<HTMLElement>) => void;
};
export default function TableMoreMenu({ actions, open, onClose, onOpen }: Props): React.JSX.Element;
export {};
