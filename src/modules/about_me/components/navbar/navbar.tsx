import React from 'react';
import {MenuItem} from "../dropdown/menu_item";

export const Navbar = () => {
    return (
        <nav
            className="relative items-center justify-between px-2 navbar-expand-lg bg-gray-200 mb-3">
            <MenuItem label={"Home"}>
                <MenuItem label="Menu 1" className="font-normal"/>
                <MenuItem label="Menu 2" className="font-normal"/>
                <MenuItem label="Menu 3" className="font-normal"/>
            </MenuItem>
        </nav>
    )
}
