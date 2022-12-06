import { motion } from "framer-motion";
import logo from "./logo.svg";
import useFetch from "./useFetch";
import "./App.css";
import Wrapper from "./Wrapper";

function App() {
  // Simulering af data fra api
  let news = [
    {
      section: "business",
      subsection: "",
      title: "Why Gas Prices Are So High",
      abstract:
        "How much people pay for gas is the result of tradi…, it comes down to a matter of supply and demand.",
      url: "https://www.nytimes.com/interactive/2022/06/14/business/gas-prices.html",
    },
    {
      section: "us",
      subsection: "politics",
      title:
        "The Fractious Night That Began Trump’s Bid to Overturn the Election",
      abstract:
        "Donald J. Trump’s advisers urged him not to declar…d to the one who told him what he wanted to hear.",
      url: "https://www.nytimes.com/2022/06/13/us/politics/trump-election-night.html",
    },
    {
      section: "us",
      subsection: "politics",
      title:
        "Jan. 6 Panel Delays Wednesday Hearing to Give Staff Time to Prepare",
      abstract:
        "The session had been scheduled to focus on Preside…Justice Department to overturn the 2020 election.",
      url: "https://www.nytimes.com/2022/06/14/us/politics/jan-6-hearing-delayed.html",
    },
    {
      section: "business",
      subsection: "",
      title: "For Its Next Zero Covid Chapter, China Turns to Mass Testing",
      abstract:
        "Residents in many cities must show negative P.C.R.… policy may hamper efforts to revive the economy.",
      url: "https://www.nytimes.com/2022/06/14/business/china-covid-testing.html",
    },
    {
      section: "headway",
      subsection: "",
      title:
        "How Houston Moved 25,000 People From the Streets Into Homes of Their Own",
      abstract:
        "The nation’s fourth-largest city hasn’t solved hom…ts remarkable progress can suggest a way forward.",
      url: "https://www.nytimes.com/2022/06/14/headway/houston-homeless-people.html",
    },
    {
      section: "us",
      subsection: "",
      title:
        "Southern Baptists, Battling Divisions, Gather for ‘Historic’ Convention",
      abstract:
        "The nation’s largest Protestant denomination, a be…er and determine response to a sex abuse scandal.",
      url: "https://www.nytimes.com/2022/06/14/us/southern-baptists-convention.html",
    },
    {
      section: "us",
      subsection: "",
      title:
        "Entrances to Yellowstone Park Are Closed After Heavy Rain and Floods",
      abstract:
        "Visitors were evacuated after record rainfall wash… said. It was unclear when the park would reopen.",
      url: "https://www.nytimes.com/2022/06/14/us/yellowstone-rain-flooding.html",
    },
    {
      section: "health",
      subsection: "",
      title:
        "Risking a Society’s Retribution, Growing Numbers of Girls Resist Genital Cutting",
      abstract:
        "Sierra Leone is one of a few countries in sub-Saha…randmothers by refusing to undergo the procedure.",
      url: "https://www.nytimes.com/2022/06/14/health/female-genital-cutting-sierra-leone.html",
    },
    {
      section: "climate",
      subsection: "",
      title: "Saving a Texan Bayou, ‘16 Bottles’ at a Time",
      abstract:
        "Bayou Dave, a modern-day Sisyphus, has spent the l…choked Houston waterway of plastic and Styrofoam.",
      url: "https://www.nytimes.com/2022/06/14/climate/bayou-dave-trash-cleanup.html",
    },
    {
      section: "opinion",
      subsection: "",
      title:
        "The Gerontocracy of the Democratic Party Doesn’t Understand That We’re at the Brink",
      abstract:
        "Millions of Democratic voters can see and feel tha…hanged in profound ways since at least the 1990s.",
      url: "https://www.nytimes.com/2022/06/14/opinion/beware-the-ruinous-optimism-of-democratic-leaders.html",
    },
    {
      section: "opinion",
      subsection: "",
      title:
        "Inside the Minds of Antiwar Russians: ‘Silence Is My Punishment Now’",
      abstract:
        "Some Russians who oppose the war in Ukraine are ex…n existential crisis marked by sorrow and regret.",
      url: "https://www.nytimes.com/2022/06/14/opinion/anti-war-russians-identity-crisis-ukraine.html",
    },
    {
      section: "opinion",
      subsection: "",
      title: "Inflation Isn’t Going to Bring Back the 1970s",
      abstract:
        "The Federal Reserve has the tools that it needs. Now it should use them. ",
      url: "https://www.nytimes.com/2022/06/14/opinion/inflation-stagflation-economy.html",
    },
    {
      section: "opinion",
      subsection: "",
      title: "What a Dying Lake Says About the Future",
      abstract: "If we can’t save the Great Salt Lake, what can we save?",
      url: "https://www.nytimes.com/2022/06/13/opinion/great-salt-lake.html",
    },
    {
      section: "opinion",
      subsection: "",
      title: "We Know How America Got Such a Corporate-Friendly Court",
      abstract: "Can the right really be realigned with the working class? ",
      url: "https://www.nytimes.com/2022/06/14/opinion/conservatism-federalist-society-populists.html",
    },
    {
      section: "opinion",
      subsection: "",
      title: "America’s Hospitals Are in Transition",
      abstract:
        "I am not taking care of a single patient with the coronavirus. But is that as good as it gets?",
      url: "https://www.nytimes.com/2022/06/14/opinion/hospital-covid-new-doctors.html",
    },
    {
      section: "opinion",
      subsection: "",
      title:
        "Don’t Add Curbs on Guns. Repeal Liability Protections for Gun Makers and Sellers.",
      abstract: "Freedom and responsibility, in equal measure.",
      url: "https://www.nytimes.com/2022/06/14/opinion/gun-liability-restrictions.html",
    },
    {
      section: "opinion",
      subsection: "",
      title:
        "Germany’s Chancellor Promised to Deter Putin. Then He Did Nothing.",
      abstract:
        "Olaf Scholz’s indecisiveness is more than a political failure.",
      url: "https://www.nytimes.com/2022/06/14/opinion/germany-scholz-russia-ukraine.html",
    },
    {
      section: "briefing",
      subsection: "",
      title: "Inflation and Price Gouging",
      abstract: "We look at whether “greedflation” is causing higher prices.",
      url: "https://www.nytimes.com/2022/06/14/briefing/inflation-supply-chain-greedflation.html",
    },
    {
      section: "podcasts",
      subsection: "the-daily",
      title: "Senator Chris Murphy on the Bipartisan Gun Safety Deal",
      abstract:
        "The lawmaker at the center of the effort explains …sal came together and what changes it would make.",
      url: "https://www.nytimes.com/2022/06/14/podcasts/the-daily/gun-safety-deal-senate-chris-murphy.html",
    },
  ];

  // Liste over kategorier
  let categories = news.map((news) => news.section);

  // Liste over kategorier uden duplikater
  let sortedCategories = categories.filter((element, index) => {
    return categories.indexOf(element) === index;
  });

  return (
    <div className="App">
      <Wrapper />
      {sortedCategories.map((category, index) => (
        <section key={index}>
          <div style={{ color: "purple" }}>{category}</div>
          {news.map((news) => news.section === category && (<><p>{news.title}</p><p style={{color: 'red'}}>{news.poltics}</p></>))}
        </section>
      ))}
    </div>
  );
}

export default App;
