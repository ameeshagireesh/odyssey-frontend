import Link from "next/link";

const Home = () => {
  return (
    <div className="flex-col space-y-10 py-10">
      <div className="flex-col space-y-10">
        <p className="text-7xl">We help you Buy & Sell Companies</p>
        <p className="font-light"> Your dedicated team for creating great deals.</p>
        <div>
          <Link href='/contact' className="bg-black text-white font-normal rounded-lg p-4">Get in touch</Link>
        </div>
      </div>

      <div className="">
        <p className="text-5xl text-center">Consulting & Services</p>
        <p className="font-light text-center">Quickly connect with verified buyers  & sellers on our platform for seamless deal-making.</p>
        <div className="flex gap-5 font-normal">
          <div className="space-y-10 w-1/2">
            <div className="bg-black text-white rounded-lg p-4">
              <p>Icon</p>
              <p className="'text-4xl"> Pitch Deck</p>
              <p className="font-light text-base">We'll weave your story into a powerful narrative to elevate your presence in the investor arena.</p>
              <Link href='/schedule' className=" text-base">Schedule a Call</Link>
            </div>
            <div className="bg-black text-white rounded-lg p-4">
              <p>Icon</p>
              <p className="font-normal text-4xl"> Valuation Reports</p>
              <p className="font-light text-base">Get to know how much is your company’s worth? This will help you raise capital.</p>
              <Link href='/schedule'>Schedule a Call</Link>
            </div>
            <div className="bg-black text-white rounded-lg p-4">
              <p>Icon</p>
              <p className="font-normal text-4xl"> Virtual CFO</p>
              <p className="font-light text-base">Let our experts navigate and optimize your finances.</p>
              <Link href='/schedule'>Schedule a Call</Link></div>
          </div>
          <div className="space-y-5 w-1/2 ">
            <div className="bg-black text-white rounded-lg p-8 h-auto">
              <p>Icon</p>
              <p className="font-normal text-4xl"> Financial Model</p>
              <p className="font-light text-base">Dreaming of an investor-ready financial model? We've got you covered!
                We'll craft your entire business financial model from scratch, ensuring it's ready to impress investors. <br /> <br />
                Our team combines industry insights and financial expertise to create a comprehensive model that not only impresses
                investors but also serves as a strategic tool for your business growth.</p>
              <Link href='/schedule'>Schedule a Call</Link>
            </div>
            <div className="bg-black text-white rounded-lg p-4 h-auto">
              <p>Icon</p>
              <p className="font-normal text-4xl"> End to End Fund Raising</p>
              <p className="font-light text-base">We will handhold your entire fund raising process.
                We'll be your dedicated guide, providing hands-on support throughout the entire process</p>
              <Link href='/schedule'>Schedule a Call</Link>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-5xl text-center"> Investor - Company Matchmaking</p>
        <p className="font-light text-center"> Quickly connect with verified companies and investors on our platform for making seamless deals.</p>
        <div className="flex gap-5 font-normal">
          <div className="bg-black text-white rounded-lg p-4 w-1/2">
            <p>Icon</p>
            <p className="font-normal text-4xl"> Company</p>
            <p className="font-light text-base">Companies can list anonymously and attract inbound interest.</p>
          </div>
          <div className="bg-black text-white rounded-lg p-4 w-1/2">
            <p>Icon</p>
            <p className="font-normal text-4xl"> Financial Institutions</p>
            <p className="font-light text-base">Financial Institutions can explore a diverse selection of verified companies.</p>
          </div>
        </div>
        <p className="font-light">We facilitate hassle-free fundraising and M&A conversations that lead to successful deals – only pay us after a deal is done.</p>
      </div>

      <div>
        <p className="text-5xl text-center"> Business Valuation & Funding Readiness Index</p>
        <p className="font-light text-center"> Unlock the value of your business with our intuitive online valuation calculator and funding readiness index — precise, quick, and hassle-free!</p>
        <div className="flex gap-5 font-normal">
          <div className="bg-black text-white rounded-lg p-4 w-1/2">
            <p>Icon</p>
            <p className="font-normal text-4xl"> Business Valuation for Companies</p>
            <p className="font-light text-base">Get your business valuation through our quick online valuation calculator tool.</p>
          </div>
          <div className="bg-black text-white rounded-lg p-4 w-1/2">
            <p>Icon</p>
            <p className="font-normal text-4xl"> Funding Readiness Index (FRI)</p>
            <p className="font-light text-base">Discover your capital-raising readiness! Take our quick questionnaire, unlock your score, and receive expert advice to bridge the gap.
              Elevate your fundraising success now!</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="font-light">
          Regardless of whether you're a company representative, an investor, a lender, or any other interested party, we're keen on connecting with you.
          Feel free to reach out – we're here to engage!
        </p>
        <div>
          <Link href='/contact' className="bg-black text-white rounded-lg font-normal p-4">Get in touch</Link>
        </div>
      </div>
    </div>)
}

export default Home;