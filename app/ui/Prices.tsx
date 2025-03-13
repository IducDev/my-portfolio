
import React from 'react';
import landing from "../../public/telefono-inteligente.png";
import Image from 'next/image';
//import kali from "../../public/kali-linux-logo-AED181186E-seeklogo.com.png";
//import Bash from "../../public/Bash-scripting.webp";
import sitioWEb from "../../public/pagina-web.png";
import software from "../../public/software-completo.png";





const Prices = () => {
 return (
    <div id='services' className='w-full h-full bg-bluePrimary p-5'>
      <h2 className='text-skyClear text-[1.5rem] md:text-[3rem] mb-8'>Services</h2>
      {/* Timeline */}
      <ol className="grid grid-cols-1 md:grid-cols-3 mx-5 gap-5">
        {/* por cada fila solo pueden ir tres columnas de experiencias */}

        {/* Mobile Development */}
        <li className="relative mb-6 sm:mb-0 col-span-1 my-4">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <div className='p-3 bg-white w-max rounded-lg m-3'>
                <Image src={landing} alt="mobile-development" className="w-[5rem] mt-3" />
              </div>
              <span className="mb-5 text-4xl">Mobile Development</span>
            </h3>
            <time className="block mb-2 text-2xl font-normal leading-none text-white mt-3">Delivery Time: 2-6 months</time>
            <div className="text-base font-normal text-white">
              We create mobile applications for  Android, offering cross-platform solutions.
              Key features include:
              <ul className='list-disc ml-5'>
                <li>UI/UX design</li>
                <li>Backend integration</li>
                <li>Database integration</li>
                <li>User authentication</li>
                <li>Push notifications</li>
                <li>Third-party API integration</li>
              </ul>
              <details>
                <summary>More details</summary>
                <ul className='list-disc ml-5'>
                  <li>Local storage for offline operation.</li>
                  <li>Testing on real devices and emulators.</li>
                  <li>Publication on Google Play Store  (optional, may be charged separately).</li>
                </ul>
              </details>
            </div>
            <div className="text-base font-normal text-white">
  <span className="text-lg font-semibold text-blue-400">Average Prices:</span>
  <div className="mt-2 space-y-2">
    {/* Basic Section */}
    <div>
      <span className="font-medium text-gray-300">Development:</span>
      <ul className="ml-4 list-disc space-y-1">
        <li>
          <span className="font-bold text-green-400">Outside Venezuela:</span> $2,000 - $3,000 USD
        </li>
        <li>
          <span className="font-bold text-green-400">In Venezuela:</span> $600 - $2,000 USD
        </li>
      </ul>
    </div>

    {/* Advanced Section */}
    <div>
      <span className="font-medium text-gray-300">Maintenance:</span>
      <ul className="ml-4 list-disc space-y-1">
        <li>
          <span className="font-bold text-green-400">Outside Venezuela:</span> $300−400 USD/moth
        </li>
        <li>
          <span className="font-bold text-green-400">In Venezuela:</span> $100−250 USD/moth
        </li>
      </ul>
    </div>
  </div>
</div>
          </div>
        </li>

        {/* Complete Website */}
        <li className="relative mb-6 sm:mb-0 col-span-1 my-4">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <div className='p-3 bg-white w-max rounded-lg m-3'>
                <Image src={sitioWEb} alt="complete-website" className="w-[5rem] mt-3" />
              </div>
              <span className="mb-5 text-4xl">Complete Website</span>
            </h3>
            <time className="block mb-2 text-2xl font-normal leading-none text-white mt-3">Delivery Time: 3-6 weeks</time>
            <div className="text-base font-normal text-white">
              We offer robust website solutions with multiple pages and functionalities, ideal for a professional online presence.
              Key features:
              <ul className='list-disc ml-5'>
                <li>Responsive design</li>
                <li>UI/UX design</li>
                <li>CMS integration</li>
                <li>Advanced forms</li>
                <li>Payment gateway integration (optional)</li>
                <li>SEO optimization</li>
              </ul>
              <details>
                <summary>More details</summary>
                <ul className='list-disc ml-5'>
                  <li>Blog with categories, tags, and comments (optional).</li>
                  <li>Hosting and domain (optional, may be charged separately).</li>
                </ul>
              </details>
            </div>
            <div className="text-base font-normal text-white">
                <span className="text-lg font-semibold text-blue-400">Average Prices:</span>
                <div className="mt-2 space-y-2">
                    {/* Basic Section */}
                    <div>
                        <span className="font-medium text-gray-300">Development:</span>
                        <ul className="ml-4 list-disc space-y-1">
                            <li>
                                <span className="font-bold text-green-400">Outside Venezuela:</span> $600 - $1,500 USD
                            </li>
                            <li>
                                <span className="font-bold text-green-400">In Venezuela:</span> $200 - $600 USD
                            </li>
                        </ul>
                    </div>

                    {/* Advanced Section */}
                    <div>
                        <span className="font-medium text-gray-300">Maintenance:</span>
                        <ul className="ml-4 list-disc space-y-1">
                            <li>
                                <span className="font-bold text-green-400">Outside Venezuela:</span> $120−300 USD/moth
                            </li>
                            <li>
                                <span className="font-bold text-green-400">In Venezuela:</span> $40−100 USD/moth
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </li>

        {/* Custom Software Development */}
        <li className="relative mb-6 sm:mb-0 col-span- my-4">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pr-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              <div className='p-3 bg-white w-max rounded-lg m-3'>
                <Image src={software} alt="custom-software" className="w-[5rem] mt-3" />
              </div>
              <span className="mb-5 text-4xl">Custom Software</span>
            </h3>
            <time className="block mb-2 text-2xl font-normal leading-none text-white mt-3">Delivery Time: 2-6 months</time>
            <div className="text-base font-normal text-white">
              We develop personalized web and mobile applications tailored to your specific business needs.
              Key features:
              <ul className='list-disc ml-5'>
                <li>UI/UX design</li>
                <li>Backend integration</li>
                <li>Database integration</li>
                <li>User authentication</li>
                <li>Admin panel</li>
                <li>Third-party API integration</li>
              </ul>
              <details>
                <summary>More details</summary>
                <ul className='list-disc ml-5'>
                  <li>Functionality testing and delivery of technical documentation.</li>
                </ul>
              </details>
            </div>
            <div className="text-base font-normal text-white">
  <span className="text-lg font-semibold text-blue-400">Average Prices:</span>
  <div className="mt-2 space-y-2">
    {/* Basic Section */}
    <div>
      <span className="font-medium text-gray-300">Development:</span>
      <ul className="ml-4 list-disc space-y-1">
        <li>
          <span className="font-bold text-green-400">Outside Venezuela:</span> $2,000 - $3,000 USD
        </li>
        <li>
          <span className="font-bold text-green-400">In Venezuela:</span> $600 - $2,000 USD
        </li>
      </ul>
    </div>

    {/* Advanced Section */}
    <div>
      <span className="font-medium text-gray-300">maintenance:</span>
      <ul className="ml-4 list-disc space-y-1">
        <li>
          <span className="font-bold text-green-400">Outside Venezuela:</span> $300−400 USD/month
        </li>
        <li>
          <span className="font-bold text-green-400">In Venezuela:</span> $100−250 USD/month
        </li>
      </ul>
    </div>
  </div>
</div>
          </div>
        </li>
      </ol>
    </div>
  );
}

export default Prices;