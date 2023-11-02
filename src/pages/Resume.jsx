import "../styles/Resume.css";
import PDF from "../downloads/resume.pdf";

export default function Resume() {
  return (
    <>
      <h1>Garrett's Resume</h1>
      <a className="download-button" href={PDF} download>
        Download Resume
      </a>
      <hr></hr>

      <h2>Overview</h2>
      <p className="resume-copy">
        I have ten years of experience managing a wide range of integrated
        communications accounts for major companies, including Microsoft, Intel,
        Nestle, and The Coca-Cola Company. My specialty is data-driven content
        development and paid media strategy across digital and traditional
        platforms for B2B, B2C, public affairs, and internal communications
        programs. I have deep knowledge and hands-on experience in all aspects
        of account management and have been responsible for directing internal
        teams and outside vendors while managing day-to-day client communication
        and reporting.
      </p>

      <hr></hr>
      <h2>Experience</h2>
      <h3 className="experience-header">WE Communications</h3>
      <ul className="work-experience">
        <li>
          Microsoft Store Creator Partner Program: Strategic and day-to-day
          operations lead for a TikTok and Instagram influencer campaign to
          drive awareness of Microsoft Store, in addition to holidayrelated
          promotions
        </li>
        <br></br>
        <li>
          Microsoft Sustainability Messaging Program: Robust content, paid
          promotion, and social channel strategy development to amplify key
          messages for “opinion elite” audiences related to Microsoft’s ongoing
          sustainability efforts
        </li>
        <br></br>
        <li>
          Microsoft Internal Communications Strategy: Team lead in developing an
          internal comms plan, governance policy, and complimenting external
          social media strategy for Microsoft regional office sites
        </li>
        <br></br>
        <li>
          Intel: Internal comms channel and content governance; Intel Newsroom
          content and channel strategy across social media platforms and YouTube
        </li>
        <br></br>
        <li>
          Alteryx: Team lead for Alteryx social media consulting, including
          metrics reporting, content development, and placement strategy
        </li>
        <br></br>
        <li>
          Brother: Digital and social media strategy planning and execution
          lead, including a TikTok and Instagram influencer program, as well as
          a YouTube channel refresh strategy
        </li>
      </ul>

      <h3 className="experience-header">Ketchum</h3>
<ul className="work-experience">
<li>Managing supervisor of corporate accounts for Bunge Limited and Nestlé N.A.</li>
<br></br>
<li>Worked with creative teams to concept, develop and execute brand awareness and integrated B2B
marketing campaigns</li>
<br></br>
<li>Oversaw traditional and digital paid media planning, creative development and placement</li>
<br></br>
<li>Social media strategy, team oversight, and campaign execution (Facebook, LinkedIn, Twitter)</li>
<br></br>
<li>Concepted and executed the development of Nestle Coffee mate’s Amazon Store presence</li>
<br></br>
<li>Drafted, edited, and pitched press releases related to product launches and corporate
partnerships to key industry platforms and publications</li>
<br></br>
<li>Collaborated on paid influencer campaign planning for brand awareness</li>
</ul>


      <h3 className="experience-header">GMMB</h3>
<ul className="work-experience">
<li>Concepted, built, and maintained large interactive websites, such as BalanceUS.org and
CheckToProtect.org with a development team</li>
<br></br>
<li>Oversaw a creative team in the concepting and execution of designs across a wide array of media
platforms, including print, out of home, banner ads, social media content, collateral materials,
mailers, and email blasts</li>
<br></br>
<li>Coordinated with media placement teams to build campaign plans; maintained trackers for
campaign flights and account budgets</li>
<br></br>
<li>Built and executed local and nationwide grassroots canvassing campaigns, analyzed, and reported
data as it pertained to consumer behaviors</li>
<br></br>
<li>Managed film crews and planned logistics for video shoots at corporate headquarters and small
businesses across the country; managed video editing team to finalize spots. Final versions of this
video project can be viewed here</li>
<br></br>
<li>Managed workflow and project trackers for account teams</li>
</ul>


      <h3 className="experience-header">Goddard Gunster</h3>
<ul className="work-experience">
<li>Campaign strategy planning and management; built and managed budgets, schedules, and
calendars for print and video advertisement flights
</li>
<br></br>
<li>Median between creative department and clients regarding project expectations, edits, and final
delivery</li>
<br></br>
<li>Worked in tandem with digital, print, radio, and television ad placement vendors; maintained
tracking documents of respective flights</li>
<br></br>
<li>Built production budgets, oversaw logistics for TV and digital video productions</li>
<br></br>
<li>Social media strategy planning, page and post promotion, social media budget recommendations,
data analytics reports for client</li>
<br></br>
<li>Research digests of quantitative cross tabs, creation of campaign messaging master documents</li>
<br></br> 
<li>Qualitative reporting of focus groups</li>
<br></br>
<li>Collateral and field team management for ballot and legislative campaigns</li>
</ul>
<hr></hr>
      <h2>Education</h2>
      <ul className="work-experience">
<li>St. Lawrence University 2002-2006</li>
<li>Major: English</li>
<li>Minor: Philosophy</li>
</ul> 
    </>
  );
}
