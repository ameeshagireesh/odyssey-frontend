import Link from "next/link";

const Home = () => {
  return (<div>
    <div>
      <h1>We help you sell Buy & Sell Companies</h1>
      <p> Your dedicated team for creating great deals.</p>
      <Link href='/contact'>Get in touch</Link>
    </div>

    <div>
      <h1>Consulting & Services</h1>
      <p>Quickly connect with verified buyers  & sellers on our platform for seamless deal-making.</p>
      <div>
        <div>
          <div>Pitch Desk</div>
          <div>Valuation Reports</div>
          <div> Virtual CFO</div>
        </div>
        <div>
          <div>Financial Models</div>
          <div>End to End Fund Raising</div>
        </div>
      </div>
    </div>

    <div>
      <h1> Investor - Company Matchmaking</h1>
      <p> Quickly connect with verified companies and investors on our platform for making seamless deals.</p>
      <div>
        <div>
          Company
        </div>
        <div>
          Financial Institutions
        </div>
      </div>
      <p>We facilitate hassle-free fundraising and M&A conversations that lead to successful deals – only pay us after a deal is done.</p>
    </div>

    <div>
      <h1> Business Valuation & Funding Readiness Index</h1>
      <p> Unlock the value of your business with our intuitive online valuation calculator and funding readiness index — precise, quick, and hassle-free!</p>
      <div>
        <div>
        Business Valuation for Companies
        </div>
        <div>
        Funding Readiness Index (FRI)
        </div>
      </div>
    </div>

    <div>
      <p>
        Regardless of whether you're a company representative, an investor, a lender, or any other interested party, we're keen on connecting with you. 
        Feel free to reach out – we're here to engage!
      </p>
      <Link href='/contact'>Get in touch</Link>
    </div>
  </div>)
}

export default Home;