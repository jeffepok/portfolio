import React, {useState} from 'react';
import {ChevronDownIcon} from "@heroicons/react/outline";
import {MenuItemProps} from "./interfaces";

export const MenuItem = (props: MenuItemProps) => {
    let [showMenu, setShowMenu] = useState(false)

    return (
        <div className="relative">
            <div className="flex flex-wrap cursor-pointer" onClick={() => {
                setShowMenu(!showMenu)
            }} onBlur={() => {
                setShowMenu(!showMenu)
            }}>
                <div
                    className="rounded-tl-lg rounded-tr-lg w-full relative flex justify-between lg:w-auto bg-white mt-2 px-4 lg:justify-start">
                    <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black"
                       href={props.url ?? "#"}>
                        {props.label}
                    </a>
                </div>
                {
                    props?.children ? <ChevronDownIcon className="w-5 ml-2 mt-2"/> : <></>
                }

            </div>
            <div
                className={`absolute bg-white top-12 px-4 py-1 rounded text-left ${!showMenu ? "invisible " +
                    "transition-all ease-in-out duration-150 transform translate-y-6" : ""}`}>
                {props.children}
            </div>
        </div>
    )
}
