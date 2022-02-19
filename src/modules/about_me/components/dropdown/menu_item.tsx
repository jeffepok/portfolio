import React, {useState} from 'react';
import {ChevronDownIcon} from "@heroicons/react/outline";
import {MenuItemProps} from "./interfaces";

export const MenuItem = (props: MenuItemProps) => {
    let [showMenu, setShowMenu] = useState(false)

    return (
        <div className="relative">
            <div className="flex flex-wrap w-auto">
                <div
                    onClick={() => {
                        setShowMenu(!showMenu)
                    }} onBlur={() => {
                    setShowMenu(!showMenu)
                }}
                    className="cursor-pointer flex">
                    <div
                        className="rounded-tl-lg rounded-tr-lg w-full relative flex justify-between lg:w-auto bg-white mt-2 px-4 lg:justify-start">
                        <a className={
                            props.className ||
                            "text-sm font-bold leading-relaxed py-2 mt-0 uppercase text-black"
                        }
                           href={props.url ?? "#"}>
                            {props.label}
                        </a>
                    </div>
                    {
                        props?.children ? <ChevronDownIcon className="w-5 ml-2 mt-2"/> : <></>
                    }

                </div>

            </div>
            {
                props.children && (<div
                    className={
                        `-z-10 absolute transition-all bg-white duration-500 -bottom-1 py-1 rounded text-left ${showMenu ?
                            "transform translate-y-full z-10" : ""}`
                    }>
                    {props.children}
                </div>)
            }

        </div>
    )
}
