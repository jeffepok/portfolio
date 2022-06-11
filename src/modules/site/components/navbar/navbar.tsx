import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BsChevronDown, BsHouseFill, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs"
import Typist from "react-typist"
import logo from "../../../../assets/images/logo.svg"

const Navbar = () => {
    return (
        <div className="mb-11">
            <nav
                className="z-20 sticky top-0 px-2 grid grid-cols-3 items-center bg-gray-300 mb-3">
                <div className="flex">
                    <div
                        className="rounded-t-md relative bg-white mt-1 pl-3 pr-14">
                        <div
                            className={"group flex rounded-md items-center text-sm leading-relaxed py-1 text-black"}
                            style={{ fontFamily: "Arial" }}>
                            <BsHouseFill className="mr-2" />
                            Home
                        </div>
                    </div>
                    <Menu as="div" className="relative text-left mx-2 hover:bg-gray-200 rounded-tl-md mt-1 px-2">
                        <div className="inline-flex ">
                            <Menu.Button
                                className="relative group flex rounded-md items-center text-sm py-1 text-black">
                                <BsChevronDown
                                    className="w-4 h-5 mx-1 text-dark"
                                    aria-hidden="true"
                                />
                            </Menu.Button>

                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition-all duration-300 ease-out -z-10"
                            enterFrom="-translate-y-full"
                            enterTo="translate-y-px"
                            leave="transition-opacity duration-100"
                            leaveFrom="opacity-1"
                            leaveTo="opacity-0"
                        >

                            <Menu.Items className="absolute bg-white w-28 rounded-md mt-2">
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={`${active && 'bg-gray-300'} block w-full px-2 pt-1 my-1`}>

                                            <button
                                                className={`text-left`}
                                            >
                                                About me
                                            </button>
                                        </div>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={`${active && 'bg-gray-300'} block w-full px-2 pt-1 my-1`}>

                                            <button
                                                className={`text-left`}
                                            >
                                                Blog
                                            </button>
                                        </div>

                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={`${active && 'bg-gray-300'} block w-full px-2 pt-1 my-1`}>

                                            <button
                                                className={`text-left`}
                                            >
                                                Contact
                                            </button>
                                        </div>
                                    )}
                                </Menu.Item>
                            </Menu.Items>

                        </Transition>
                    </Menu>

                </div>
                <div>
                    <a href="/"><img className="w-8 mx-auto py-1" src={logo} alt="logo" /></a>
                </div>
                <div className="flex flex-row-reverse">
                    <a className="self-center mr-2" href="https://github.com/jeffepok" rel="noreferrer" target="_blank"><BsGithub /></a>
                    <a className="self-center mr-2" href="https://twitter.com/Tee4Jey" rel="noreferrer" target="_blank"><BsTwitter /></a>
                    <a className="self-center mr-2" href="https://web.facebook.com/addaipokut" rel="noreferrer" target="_blank"><BsFacebook /></a>
                </div>
            </nav>
            <div className="text-white">
                <Typist className="mt-5 text-gray-300">
                    <Typist.Delay ms={1000} />
                    JEFFERSON TUFFOUR
                </Typist>
            </div>
        </div>
    )
}

export default Navbar
