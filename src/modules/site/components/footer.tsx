export default function Footer() {
    return (
        <footer className="flex justify-between text-[#94afc7] py-14 px-24">
            <p className="">Copyright © 2022 Jefferson Tuffour.</p>
            <nav>
                <ul className="justify-center flex">
                    <li className=" mr-5"><a className="footnav__link" href="/">Home |</a></li>
                    <li className=" mr-5"><a className="footnav__link" href="/blog/">Blog |</a></li>
                    <li className=" mr-5"><a className="footnav__link" href="/about/">About |</a></li>
                    <li className=" mr-5"><a aria-current="page" className="footnav__link footnav__link--active" href="/contact/">Contact</a></li>
                </ul>
            </nav>
        </footer>
    )
}