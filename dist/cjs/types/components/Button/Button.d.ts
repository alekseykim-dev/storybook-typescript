import { FC, HTMLAttributes } from 'react';
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string;
}
export declare const Button: FC<ButtonProps>;
