import { Helmet } from 'react-helmet-async';
import { Hpe } from 'grommet-icons';

import installer from '../../../assets/installer.png';
import xbav from '../../../assets/xbav.png';
import appdirect from '../../../assets/appdirect.png';
import mvs from '../../../assets/mvs.jpg';
import organisedminds from '../../../assets/organisedminds.png';

export default function Works() {
  return (
    <article className="py-6 px-4 space-y-6 divide-y divide-sky-400 divide-y-2">
      <Helmet>
        <title>
          Projects - Jiří Chára
        </title>
      </Helmet>

      <section className="container mx-auto">
        <h2 className="text-2xl mb-4 font-bold" id="hpe">
          <a
            className="hover:brightness-125"
            href="#hpe"
          >
            Hewlett Packard Enterprise (2021 until now)
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
              { ' ' }
              <a
                className="underline text-[#01A982] hover:brightness-125"
                href="https://www.hpe.com"
              >
                <Hpe color="#01A982" className="inline-block mr-0.5 hover:rotate-[30deg] duration-500" />
                Hewlett Packard Enterprise
              </a>
              { ' ' }
              I work as a Senior Software Engineer on a new generation UI for
              { ' ' }
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.hpe.com/us/en/software/ezmeral-data-fabric.html"
              >
                HPE Ezmeral Data Fabric
              </a>
              { ' '}
              . Using primarily
              Typescript, React and Redux as a foundation.
            </p>

            <p>
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.hpe.com/us/en/software/ezmeral-data-fabric.html"
              >
                HPE Ezmeral Data Fabric
              </a>
              { ' ' }
              is industry’s first edge to cloud solution that natively ingests and stores different
              data types, enables in-place processing, and simplifies data access by supporting
              APIs, languages, and protocols popular with analytic and data science consumers.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-2xl mb-4 mt-4 font-bold" id="xempus">
          <a
            className="hover:brightness-125"
            href="#xempus"
          >
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
              { ' ' }
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.xempus.com"
              >
                Xempus
              </a>
              { ' ' }
              platform providing a solution for occupational retirement
              pension supporting multiple target groups from regular users, through agents toward
              employers, and insurer companies.
            </p>

            <p>
              I worked as a senior front-end engineer at
              { ' ' }
              <a
                className="underline text-[#00569d] hover:brightness-125"
                href="https://www.xempus.com"
              >
                Xempus AG
              </a>
              , I was responsible for
              overall front-end architecture and building features and making them available for
              the whole platform. We focused on reusability, and therefore we are using patterns
              like micro front-ends and event sourcing. Our front-end was mainly built using Vue.js.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-2xl mb-4 mt-4 font-bold" id="appdirect">
          <a
            className="hover:brightness-125"
            href="#appdirect"
          >
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
              { ' ' }
              is a digital platform that helps businesses to
              accelerate sales of applications through their online store. It provides a market
              place as a service for huge enterprise corporations like Vodafone, Swisscom, Deutsche
              Telekom, Telstra, Comcast, ABB, etc. It contains top SaaS and IaaS applications
              including Microsoft Office 365, Box, G-Suite.
            </p>

            <p>
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.appdirect.com"
              >
                AppDirect
              </a>
              { ' ' }
              enables small companies to succeed by providing an API to
              monetize their applications through
              { ' ' }
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.appdirect.com"
              >
                AppDirect
              </a>
              &apos;s ecosystem.
            </p>

            <p>
              As a senior front-end engineer at
              { ' ' }
              <a
                className="underline hover:brightness-125 hover:decoration-sky-400"
                href="https://www.appdirect.com"
              >
                AppDirect
              </a>
              , I was responsible for building and technically designing complex features for mostly
              for purchase flow related topics. I had the opportunity to work on a large monolithic
              application and to help to split it into micro-services. Most of the new features were
              implemented using React/Redux.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-2xl mb-4 mt-4 font-bold" id="mvs">
          <a
            className="hover:brightness-125"
            href="#mvs"
          >
            Minerals Value Service, Platts - McGraw Hill Financial (from 2014 until 2015)
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
              { ' ' }
              provides data and analytics for the Iron Ore
              Industry. It contains information about steel plants, mines &amp; products, index
              prices and about the value in use. Users of
              { ' ' }
              <strong>Minerals Value Service</strong>
              { ' ' }
              gaining a deeper understanding of the market and identifying trading opportunities.
            </p>

            <p>
              I worked as a front-end developer at
              { ' ' }
              <strong>Minerals Value Service</strong>
              { ' ' }
              using primarily Angular, Highcharts, Google Maps, and SVG visualizations. The most
              challenging part was to provide excellent UX and to make the whole system smooth
              &amp; filterable.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h2 className="text-2xl mb-4 mt-4 font-bold" id="organisedminds">
          <a
            className="hover:brightness-125"
            href="#organisedminds"
          >
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
              I got introduced into web application development in 2011 at a small start-up called
              { ' ' }
              <strong>OrganisedMinds</strong>
              . I was working as a full-stack developer with a focus on
              Ruby on Rails, jQuery and Backbone.js.
              { ' ' }
              <strong>OrganisedMinds.com</strong>
              { ' ' }
              was a business
              collaboration tool similar to Trello.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
