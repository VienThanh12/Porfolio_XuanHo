import React from "react";
import Footer from '../components/Footer'
import LinkedInIcon from '../components/icon/LinkedinIcon'
import GithubIcon from "../components/icon/GithubIcon";
import Projects from "./Projects"
import ProjectCard from "../components/ProjectCard";
const Home = () => {
  return (
    <div>
    <div style={{ padding: '0px 96px 0px 96px', display: 'flex', justifyContent: 'space-between' , paddingTop: '0px', color: 'white'}}>
      {/* Left Section */}
      <div style={{ width: '66.6667%' }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white __className_48fc68" >Xuan Ho</h1>
        <h2 className="text-lg sm:text-xl lg:text-xl mt-1 dark:text-grey-400">Master IBM Student | Content Creator</h2>
        <p style={{ marginTop: '1rem', fontSize: '1.125rem' }}>
        Master's student specializing in IBM (International Business Management), 
        focused on developing expertise in <strong> global business strategies </strong>, <strong>  digital transformation </strong>, and <strong> leadership </strong> in the tech-driven economy.
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '1.125rem' }}>
          I enjoy taking cooking, traveling, and music. 
        
        </p>

        {/* Experience Section */}
        <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '2.5rem' }}>Experience</h3>
        <div style={{ marginTop: '1.5rem' }}>
          {/* Experience 1 */}

          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600' }}> Her Spa</h4>
              <span style={{ color: '#6b7280' }}>From August 2024 - Now </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Freelance | Viet Nam </p>
            <p> As a freelance content creator for a leading spa chain in Vietnam (https://herskincare.vn), my primary role is to build and grow their presence on TikTok by developing engaging and creative content that aligns with the brand's overall marketing strategy. This involves creating captivating video clips, organizing livestreams, and launching hashtag challenges to promote the spa’s services and products.</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.25rem', marginTop: '0.5rem' }}>
              <li>Content Development and Strategy:
              Craft engaging video concepts that highlight the spa’s key services, such as massage therapy, skincare treatments, and relaxation packages.
            Create a consistent content calendar to ensure regular posting aligned with the spa’s promotional activities and special offers.
          Incorporate trending challenges, sounds, and effects on TikTok to drive visibility and audience engagement.
              </li>
              <li>Scriptwriting: Develop detailed scripts for each video, outlining key angles, messaging, and call-to-actions.
              Ensure that scripts align with the spa's main content pillars, such as beauty treatments, doctor sharing, technology and equipment in beauty, customer experience and service package. 
        Adapt scripts to suit different formats such as short-form clips, tutorials, or text/image slide, influencer reviews. </li>
              <li>Marketing Goals:
              Ensure all content aligns with the spa’s broader marketing plan, supporting key objectives such as brand awareness, lead generation, and sales growth.
         Promote seasonal campaigns, special events, and new product launches in line with the spa’s promotional calendar.</li>
            </ul>
            This role requires close collaboration with the client to ensure that all content is authentic, resonates with the target audience, and drives measurable results on TikTok. Through innovative and well-executed content, I aim to grow their TikTok presence, increase engagement, and attract new customers to the spa chain in Vietnam.
          </div>

          {/* Experience 2 */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600' }}>URBAN KEY REAL ESTATE CO.LTD </h4>
              <span style={{ color: '#6b7280' }}>September 2022 - Present</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Co-Founder | Remote |  VietNam</p>
          </div>

          {/* Experience 3 */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600' }}> Senior Sales Consultant - Team Leader </h4>
              <span style={{ color: '#6b7280' }}>September 2019 - June 2022</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}> On-site | Ho Chi Minh City, Viet Nam</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.25rem', marginTop: '0.5rem' }}>
              <li>Being responsible for individual and team KPIs; coaching and mentoring newbies. Managing 9-member sales team activities to consistently meet 90-100% of sales quotas. </li>
              <li>Setting ambitious sales goals and motivated strong performance to keep team growing effectively.</li>
              <li>Leading regular team meetings to keep sales personnel motivated with tips, techniques and relevant information.</li>
              <li>Crisis managing and problem solving within the team, especially during the epidemic period.</li>
              <li>Forecasting sales to management and making monthly, quarterly and yearly action plans, allocating tasks and tracking workloads of each member.</li>
              <li>Understanding technology products and target users to support tech and app team</li>
            </ul>
            <h3> Achivements</h3>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.25rem', marginTop: '0.5rem' }}>
              <li>2021: The best salesman of Hoozing in Quarter I 2021” award </li>
              <li>2020: The Best Leasing Team in Quarter I and II </li>
              <li>2020: The Best Sales Team of the Year 2020 </li>
            </ul>
          </div>
          {/* Experience 4 */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Buzzmetrics</h4>
              <span style={{ color: '#6b7280' }}>March 2018 - September 2018</span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Junior Research Analyst | Social Listening | Onsite | Full-time | Sydney, Australia</p>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.25rem', marginTop: '0.5rem' }}>
              <li>Researching, monitoring and analyzing customer insights or consumer behaviours through user-data on social media.</li>
              <li>Setting up basic projects (Brand and Campaigns tracking) to analyse and interpret results, provide feedback to clients, write reports and recommendations. </li>
              <li>Co-ordinating the execution of projects and handling other departments responsible of the data collection and processing</li>
              <li>Being in charge of 2 industries with 4 big brands: Coca-Cola and Pepsi (Beverage), Monsanto and Croplife (Agriculture).</li>
            </ul>
          </div>
        </div>
      </div>
      

      {/* Right Section */}
      <div style={{ width: '33.3333%', marginTop: '2.5rem', paddingLeft: '2.5rem' }}>
        {/* Contact Details */}
        <div style={{ marginBottom: '1.5rem' }}>
          <a href="mailto:xuanho@gmail.com" className="mb-2 block transition duration-300 dark:hover:text-white dark:hover:opacity-100 hover:opacity-60"> xuanho@gmail.com</a>
          <p style={{  fontSize: '24px', color: '#D1D5DB' }}>Seinäjoki, Finland</p>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <LinkedInIcon/>
            <GithubIcon/>
            
          </div>
        </div>

        {/* Skills/Technologies Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' , color: 'black'}}>
          {["Content Creator", "Social Media", "Tiktok Marketing", "Content Strategy"].map((skill, index) => (
            <span
              key={index}
              
              className="bg-gray-200 transition duration-500 cursor-grab hover:bg-gray-300 hover:scale-105 dark:bg-slate-700 dark:hover:bg-slate-600 dark:hover:text-gray-50  rounded-md inline-block px-2 py-1 mb-2 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Education Section */}
        <h3 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginTop: '2.5rem' }}>Education</h3>
        <div style={{ marginTop: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600' }}> Seinäjoki University Of Applied Science</h4>
            <p style={{ fontSize: '20px'}}>Master of Business Administration - MBA, International Business Management </p>
            <p style={{ fontSize: '20px', color: '#6b7280' }}>2022 - 2024</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{fontWeight: '600' }}>FPT University</h4>
            <p style={{ fontSize: '20px'}}>Bachelor of Business Administration - BBA, Business, Management, Marketing, and Related Support Services</p>
            <p style={{ ffontSize: '40px', color: '#6b7280' }}>2013 - 2017</p>
          </div>
        </div>
      </div>
    </div>
    <Projects/>
    <Footer/>
    </div>
  );
};

export default Home;
