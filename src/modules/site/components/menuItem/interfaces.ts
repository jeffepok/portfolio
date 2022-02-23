import {ReactNode} from "react";

export interface IMenuItemProps{
    label: string,
    url?: string,
    children?: ReactNode,
    className?: string
}

