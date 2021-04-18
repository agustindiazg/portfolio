import React from 'react';
import { CurrencyDollarIcon, VideoCameraIcon, SwitchHorizontalIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import calculateAgeDiff from '@/utils/utilities';

const projects = [
  {
    name: 'ERC20 Convertor',
    description:
        'The goal of this project was to do a bridge between the Ethereum & Cardano networks.',
    icon: SwitchHorizontalIcon,
  },
  {
    name: 'Virtual Venue',
    description:
        'The goal of this project was to create an online event platform as a service.',
    icon: VideoCameraIcon,
  },
  {
    name: 'Nuvola',
    description:
        'The goal of this project was to create an stock & account manager as a service.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'CrossMax',
    description:
        'The goal of this project was to create a multi platform app to track cycling paths.',
    icon: LocationMarkerIcon,
  },
];

const firstDayOfWork = '2017/03/01';
const yearsOfDevelopment = calculateAgeDiff(new Date(firstDayOfWork));

const Projects = () => (
  <div className="py-12 bg-white" id="projects">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          I have been part of
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          I started working
          {' '}
          { yearsOfDevelopment }
          {' '}
          years ago, during this time i had have the opportunity to work on multiple projects. These are the projects that teach me the most.
        </p>
      </div>

      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          {projects.map((project) => (
            <div key={project.name} className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <project.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{project.name}</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">{project.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default Projects;
