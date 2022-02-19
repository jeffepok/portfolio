import React from 'react';
import {MenuItem} from "../dropdown/menu_item";

export const Navbar = () => {
    return (
        <nav
            className="relative flex flex-wrap items-center justify-between px-2 navbar-expand-lg bg-gray-200 mb-3">
            <MenuItem label={"Home"}>
                <p>Dropdown</p>
                <p>Menu2</p>
            </MenuItem>
        </nav>
    )
}
