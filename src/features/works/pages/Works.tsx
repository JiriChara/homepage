import { Helmet } from 'react-helmet-async';

import HpeLink from '../../../components/HpeLink';

import installer from '../../../assets/installer.png';
import xbav from '../../../assets/xbav.png';
import appdirect from '../../../assets/appdirect.png';
import mvs from '../../../assets/mvs.jpg';
import organisedminds from '../../../assets/organisedminds.png';

export default function Works() {
  return (
    <article className="py-6 px-4 space-y-6 divide-y divide-sky-400 divide-y-2">
      <Helmet>
        <title>Projects - Jiří Chára</title>
      </Helmet>

      <section className="container mx-auto">
        <h2 className="text-2xl mb-4 font-bold" id="hpe">
          <a className="hover:brightness-125" href="#hpe">
            Hewlett Packard Enterprise (from 2021 until now)
          </a>
        </h2>

        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-x-6">
          <div className="md:w-1/3">
            <img
              className="h-auto rounded shadow"
              alt="HPE Ezmeral Data Fabric Installer"
              src={installer}
            />
          </div>

          <div className="md:w-2/3 space-y-4">
            <p>
              At
              {' '}
              <HpeLink />
              {' '}
              I work as a Senior Software Engineer on a new generation UI for
              {' '}
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.hpe.com/us/en/software/ezmeral-data-fabric.html"
              >
                HPE Ezmeral Data Fabric
              </a>
              , using primarily TypeScript, React, and Redux as the foundation.
            </p>

            <p>
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.hpe.com/us/en/software/ezmeral-data-fabric.html"
              >
                HPE Ezmeral Data Fabric
              </a>
              {' '}
              is the industry’s first edge-to-cloud solution that natively ingests and stores
              different data types, enables in-place processing, and simplifies data access by
              supporting APIs, languages, and protocols popular with analytic and data science
              consumers.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-2xl mb-4 mt-4 font-bold" id="xempus">
          <a className="hover:brightness-125" href="#xempus">
            Xempus AG (from 2018 until 2021)
          </a>
        </h2>

        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-x-6">
          <div className="md:w-1/3">
            <img
              className="h-auto rounded shadow"
              alt="Xempus Employer Manager"
              src={xbav}
            />
          </div>

          <div className="md:w-2/3 space-y-4">
            <p>
              The
              {' '}
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.xempus.com"
              >
                Xempus
              </a>
              {' '}
              platform provides a solution for occupational retirement pensions, supporting
              multiple target groups—from regular users to agents, employers, and insurance
              companies.
            </p>

            <p>
              I worked as a Senior Front-End Engineer at
              {' '}
              <a
                className="underline text-[#00569d] hover:brightness-125"
                href="https://www.xempus.com"
              >
                Xempus AG
              </a>
              . I was responsible for the overall front-end architecture, building features, and
              making them available across the platform. We focused on reusability by using
              patterns like micro front-ends and event sourcing. Our front-end was mainly built
              using Vue.js.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-2xl mb-4 mt-4 font-bold" id="appdirect">
          <a className="hover:brightness-125" href="#appdirect">
            AppDirect, Inc. (from 2015 until 2018)
          </a>
        </h2>

        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-x-6">
          <div className="md:w-1/3">
            <img
              className="h-auto rounded shadow"
              alt="AppDirect Marketplace"
              src={appdirect}
            />
          </div>

          <div className="md:w-2/3 space-y-4">
            <p>
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.appdirect.com"
              >
                AppDirect
              </a>
              {' '}
              is a digital platform that helps businesses accelerate the sales of applications
              through their online store. It provides marketplace-as-a-service solutions for large
              enterprises such as Vodafone, Swisscom, Deutsche Telekom, Telstra, Comcast, ABB, and
              others. The marketplace includes top SaaS and IaaS applications, including Microsoft
              Office 365, Box, and G Suite.
            </p>

            <p>
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.appdirect.com"
              >
                AppDirect
              </a>
              {' '}
              also enables small companies to succeed by providing an API to monetize their
              applications through its ecosystem.
            </p>

            <p>
              As a Senior Front-End Engineer at
              {' '}
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.appdirect.com"
              >
                AppDirect
              </a>
              , I was responsible for building and technically designing complex features, mostly
              related to the purchase flow. I worked on a large monolithic application and helped
              split it into microservices. Most of the new features were implemented using
              React and Redux.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-2xl mb-4 mt-4 font-bold" id="mvs">
          <a className="hover:brightness-125" href="#mvs">
            Minerals Value Service, Platts – McGraw Hill Financial (from 2014 until 2015)
          </a>
        </h2>

        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-x-6">
          <div className="md:w-1/3">
            <img
              className="h-auto rounded shadow"
              alt="Minerals Value Service Project"
              src={mvs}
            />
          </div>

          <div className="md:w-2/3 space-y-4">
            <p>
              <strong>Minerals Value Service</strong>
              {' '}
              provides data and analytics for the iron ore
              industry. It includes information about steel plants, mines and products, index
              prices, and value-in-use data. Users of
              <strong>Minerals Value Service</strong>
              {' '}
              gain
              a deeper understanding of the market and can identify trading opportunities.
            </p>

            <p>
              I worked as a Front-End Developer at
              {' '}
              <strong>Minerals Value Service</strong>
              , using
              primarily Angular, Highcharts, Google Maps, and SVG visualizations. The most
              challenging part was providing excellent UX and making the entire system smooth and
              filterable.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-2xl mb-4 mt-4 font-bold" id="organisedminds">
          <a className="hover:brightness-125" href="#organisedminds">
            OrganisedMinds GmbH (from 2011 until 2014)
          </a>
        </h2>

        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-x-6">
          <div className="md:w-1/3">
            <img
              className="h-auto rounded shadow"
              alt="OrganisedMinds Application"
              src={organisedminds}
            />
          </div>

          <div className="md:w-2/3 space-y-4">
            <p>
              I was introduced to web application development in 2011 at a small start-up called
              {' '}
              <strong>OrganisedMinds</strong>
              , where I worked as a Full-Stack Developer with a
              focus on Ruby on Rails, jQuery, and Backbone.js.
              {' '}
              <strong>OrganisedMinds.com</strong>
              {' '}
              was a business collaboration tool similar to
              Trello.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
