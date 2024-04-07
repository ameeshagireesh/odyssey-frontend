const Footer = () => {
    return (
        <div className="flex-col space-y-10 bg-black text-white p-5">
            <div className="font-normal text-4xl text-center p-5">monter</div>
            <div className="flex space-x-10">
                <div className="flex-col w-1/3 font-light text-base">
                    <p className="font-medium text-2xl">Newsletter</p>
                    <p>Subscribe to our exclusive newsletter to receive regular updates and discover invaluable business insights</p>
                </div>
                <div className="flex-col w-1/3 font-light text-base">
                    <p className="font-medium text-2xl">Contact Us</p>
                    <p>hello@monter.one</p>
                    <p>+91 9819476544</p>
                </div>
                <div className="flex-col w-1/3 font-light text-base">
                    <p className="font-medium text-2xl">Products</p>
                    <p>Investor - Company matchmaking</p>
                    <p>Business Valuation for Companies</p>
                    <p>Funding Readiness Index (FRI)</p>
                    <p>Consulting & Services</p>
                </div>
            </div>
        </div>
    )
}

export default Footer