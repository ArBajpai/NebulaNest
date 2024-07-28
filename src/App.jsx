
import Navbar from './components/Navbar';
import Info from './components/Info';
import  useStore  from './store';
import TestimonialSection from './components/Testimonial';
import Footer from './components/Footer';
import WhoWeServe from './components/WhoWeServe';
import CoreMetrics from './components/CoreMetrics';
import Services from './components/Services';
import Featured from './components/Featured';
import Testimonials from './components/Testimonials';
import Offers from './components/Offers';
import Faq from './components/Faq';
import BookCall from './components/BookCall';
import { FiActivity, FiTrendingUp, FiEdit, FiBarChart, FiMonitor, FiCpu, FiUnlock, FiUser, FiTool } from 'react-icons/fi';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import { FaMagic, FaChartLine, FaPenNib, FaChartPie, FaProjectDiagram, FaBrain, FaSuitcase, FaLightbulb, FaTools } from 'react-icons/fa';
import { useState } from 'react';
import StarBackground from './components/StarBackground';

const topics = [
  {
    title: "The 4-step Magic Prompt Formula",
    description: [
      "Unlock the full potential of ChatGPT using the magic prompt formula to produce the most accurate, precise and reliable information at your fingertips."
    ],
    icon: <FaMagic />
  },
  {
    title: "Mastering Market Analysis",
    description: [
      "Leverage ChatGPT's advanced data analysis capabilities to: launch actionable insights for marketing strategies and outperforming competitors.",
      "Develop superior data models that provide detailed insights and competitive edge in understanding market trends and customer preferences."
    ],
    icon: <FaChartLine />
  },
  {
    title: "Redefining Content Creation",
    description: [
      "Implement AI-powered content generation tools to: automate repetitive tasks such as social media post generation, allowing for a more strategic planning and creativity.",
      "Enhance marketing campaigns by using user demographics and behavior trends analytics.",
      "Identify trending topics and relevant keywords, enhancing timely and relevant content creation that resonates with your audience."
    ],
    icon: <FaPenNib />
  },
  {
    title: "Data Analysis Made Easy",
    description: [
      "Analyze market trends without coding skills or statistical analysis.",
      "Leverage AI-driven data analysis platforms to extract actionable insights from large datasets, empowering you with informed decision-making in marketing strategy development."
    ],
    icon: <FaChartPie />
  },
  {
    title: "Transform Your Marketing Presentations",
    description: [
      "Integrates AI-powered analytics tools into marketing presentations to: provide real-time data insights, dynamic visualizations, and audience engagement enhancement.",
      "Optimize marketing spreadsheet automation, improving reporting methods and forecasting future trends with accuracy.",
      "Learn the creation of compelling visuals and AI-driven elements to enhance storytelling and impact."
    ],
    icon: <FaProjectDiagram />
  },
  {
    title: "Adapting to AI Trends",
    description: [
      "Explore ChatGPT API integration in: customer service chatbots to deliver personalized and contextual responses, enhancing customer satisfaction and loyalty.",
      "AI for social media management tools to automate content creation and optimize engagement.",
      "Marketing CRM tools to predict customer needs and improve sales efficiency.",
      "Learn about ChatGPT's new vision capabilities where AI can now see, hear, and interpret data."
    ],
    icon: <FaBrain />
  },
  {
    title: "Unlock Career Opportunities",
    description: [
      "Utilize AI for: identifying relevant job opportunities tailored to your skills and experience, streamlining the job hunting process.",
      "Receiving insights for tailoring your application materials for various roles and industries.",
      "Personalized guidance and recommendations for career development in the marketing field."
    ],
    icon: <FaSuitcase />
  },
  {
    title: "Innovative Marketing & Personal Branding",
    description: [
      "Explore how generative AI tools can: automate content creation tasks to produce high-quality content efficiently.",
      "Crafting engaging content for personal branding efforts to enhance visibility and credibility in their respective fields."
    ],
    icon: <FaLightbulb />
  },
  {
    title: "AI Tools for Success",
    description: [
      "Utilize AI-powered tools and GPT 4.5 Turbo for: fast summarization of market research, quickly and efficiently.",
      "Identifying and targeting niche markets by leveraging AI-driven insights, enabling you to understand consumer preferences.",
      "Localized marketing content for global audiences, ensuring messaging highlights nuances and authenticity."
    ],
    icon: <FaTools />
  },
];
const App=()=> {
  const [openStates, setOpenStates] = useState(Array(topics.length).fill(false));

  const handleToggle = (index) => {
    setOpenStates((prevState) =>
      prevState.map((state, idx) => (idx === index ? !state : state))
    );
  };

  const theme = useStore((state) => state.theme);
  return (
        <div className='absolute top-0 left-0 w-full h-full '>
          <div className='absolute top-0 left-0 w-full h-full -z-[0] pointer-events-none'>
          <StarBackground />
          </div>
          <main className={theme}>
   
 <div className='w-full px-6 md:px-30 bg-white dark:bg-slate-900 z-10'>
  <Navbar/>
<div className='w-full px-3'>
  <Info/>
</div> 
<div className='w-full px-6'>
  <TestimonialSection/>
</div>
<div className='w-full px-6 mt-3'>
  <WhoWeServe/>
</div>

<div className='w-full px-6 mt-3'>
  <CoreMetrics/>
</div>

<div>
  <Services/>
</div>
<div>
<Featured/>
<Testimonials/>
</div>

<div>
<Offers/>
</div>
<div className="min-h-screen p-10 mt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, idx) => (
          <div key={idx} className="p-4 ">
            <button
              className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium text-green-500 hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75"
              onClick={() => handleToggle(idx)}
            >
              <span className="flex items-center space-x-2 text-3xl">
                {topic.icon}
                <span className='text-2xl text-green-600'>{topic.title}</span>
              </span>
              <ChevronUpIcon
                className={`${openStates[idx] ? 'transform rotate-180' : ''} h-5 w-5 text-green-500`}
              />
            </button>
            {openStates[idx] && (
              <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {topic.description.map((desc, index) => (
                  <p key={index} className="mb-2">{desc}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

<div className='w-full'>
<Faq/>
</div>

<div>
  <BookCall/>
</div>
<div className='w-full'>
  <Footer/>
</div>
 </div>
  </main>
        </div> 
  );
}

export default App;
