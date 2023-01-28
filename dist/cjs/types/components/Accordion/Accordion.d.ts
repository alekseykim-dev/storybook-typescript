import { FC, ReactNode } from 'react';
export interface AccordionProps {
    isOpen?: boolean;
    onToggle?: () => void;
    children: ReactNode;
    title: string;
    innerControl?: boolean;
}
export declare const Accordion: FC<AccordionProps>;
