import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex-col space-y-10 bg-black text-white p-10">
            <div className="flex space-x-10 m-10">
                <div className="flex-col w-1/2 font-light text-base m-5 space-y-3">
                    <p className="font-medium text-2xl">
                        Newsletter
                    </p>
                    <p className="font-light text-sm text-slate-300">
                        Subscribe to our exclusive newsletter to receive regular updates and discover invaluable business insights.
                    </p>
                </div>
                <div className="flex-col w-1/2 font-light text-base m-5 space-y-3">
                    <p className="font-medium text-2xl">
                        Contact Us
                    </p>
                    <div className="flex space-x-3">
                        <a href="mailto:hello@monter.one">
                            <HiOutlineMail size={20} />
                        </a>
                        <p className="font-light text-sm text-slate-300">
                            hello@monter.one
                        </p>
                    </div>
                    <div className="flex space-x-3">
                        <a href="tel:+919819476544">
                            <BsTelephone size={20} />
                        </a>
                        <p className="font-light text-sm text-slate-300">
                            +91 9819476544
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <a href="https://www.linkedin.com/company/monter-one/">
                    <FaLinkedinIn size={20} />
                </a>
            </div>
        </div>
    )
}

export default Footer