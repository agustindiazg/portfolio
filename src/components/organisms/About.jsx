import React from 'react';

const AboutMe = () => (
  <div className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20" id="aboutMe">
    <div className="relative">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
          <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
            About Me
          </p>
          <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
            Interactivity between team members is the key of the success.
          </h4>
          <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
            Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
          </p>
          <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
            <li className="mt-6 lg:mt-0">
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                  Live modifications
                </span>
              </div>
            </li>
            <li className="mt-6 lg:mt-0">
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                  Data tracker
                </span>
              </div>
            </li>
            <li className="mt-6 lg:mt-0">
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                  24/24 support
                </span>
              </div>
            </li>
            <li className="mt-6 lg:mt-0">
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                  Free tips to improve work time
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
          <div className="relative space-y-4">
            <div className="flex items-end justify-center lg:justify-start space-x-4">
              <img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src="//im.vsco.co/aws-us-west-2/952ea8/888382/5bf31866b3ffc63420c9edfb/vsco5bf318c72ea20.jpg?w=519&dpr=2" alt="2" />
              <img className="rounded-lg shadow-lg w-40 md:w-64" width="260" src="https://instagram.faep9-1.fna.fbcdn.net/v/t51.2885-15/e35/29738916_2360507380641890_4988268196889886720_n.jpg?tp=1&_nc_ht=instagram.faep9-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=gjHaKeEP2_wAX8NUTgA&edm=APU89FAAAAAA&ccb=7-4&oh=5f230aee03502753a2c482208e6feb52&oe=60A1D62C&_nc_sid=86f79a" alt="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
