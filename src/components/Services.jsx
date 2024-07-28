import React from 'react';
import { FaChartLine, FaFlask, FaRegFileAlt, FaBullhorn } from 'react-icons/fa';

const Card = ({ title, description, icon }) => (
    <div className="flex p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
      <div className="text-green-600 dark:text-green-500 mr-4 text-3xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );

const Services = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Elevate Your <span className="text-green-600 dark:text-green-500">Conversions</span>, Amplify Your <span className="text-green-600 dark:text-green-500">Impact</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          We specialize in CRO strategies tailored for high-growth, purpose-led brands just like yours. On average, acquiring a new customer can cost up to 5 times more than retaining an existing one. We aim to reduce both.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <Card
          icon={<FaChartLine/>}
          title="CRO Audits"
          description="We take a step back and look at the entire funnel from the customer's perspective. To uncover the problems that the customer and everyone else can see but the team at your end is unaware of how it’s stopping revenue from coming in."
        />
        <Card
          icon={<FaFlask/>}
          title="A/B Testing Programs"
          description="Experience high-velocity, hyper-efficient split testing to fine-tune every element of your online presence."
        />
        <Card
          icon={<FaRegFileAlt/>}
          title="Landing Page Redesigns"
          description="We craft high-converting landing pages that speak to your mission and your audience."
        />
        <Card
          icon={<FaBullhorn/>}
          title="Optimized Offer & Upsell Pathways"
          description="Discover the most effective offers and upsell funnels specifically designed for purpose-led products."
        />
      </div>
    </div>
  )
}

export default Services