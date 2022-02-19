import {ReactNode} from "react";

export interface MenuItemProps{
    label: string,
    url?: string,
    children?: ReactNode,
    className?: string
}

