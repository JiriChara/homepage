import CvSection from './CvSection';
import EmployerSection from './EmployerSection';

export default function CvEmploymentHistory() {
  return (
    <CvSection title="Employment History">
      <EmployerSection
        employerName="Hewlett Packard Enterprise"
        period="Senior Software Engineer - Munich, Germany - June 1st, 2021 until now"
      >
        <p>
          As a Senior Software Engineer at Hewlett Packard Enterprise, I work on new generation
          UI for HPE Ezmeral Data Fabric. HPE Ezmeral Data Fabric is industry’s first edge to
          cloud solution that natively ingests and stores different data types, enables
          in-place processing, and simplifies data access by supporting APIs, languages, and
          protocols popular with analytic and data science consumers.
        </p>

        <p className="mt-2">
          The UI of HPE Ezmeral Data Fabric uses TypeScript, React, Redux and HPE&apos;s Grommet
          design system. I am responsible for building the new UI wizard that allows user to
          install HPE Ezmeral Data Fabric Software on existing clusters.
        </p>
      </EmployerSection>

      <EmployerSection
        employerName="Xempus AG"
        period="Senior Front-End Engineer - Munich, Germany - April 1st, 2018 until May 31st, 2021"
      >
        <p>
          The Xempus platform digitalizes occupational retirement pensions in Germany. It
          provides a solution for all target groups involved. As a senior front-end engineer at
          Xempus, I was responsible for overall architecture on front-end and for building
          features, that are available to reuse for the whole platform. I also maintained &amp;
          build a design system of reusable components and patterns. Each service in the
          platform is integrated using Docker and Kubernetes.
        </p>
      </EmployerSection>

      <EmployerSection
        employerName="AppDirect, Inc."
        period="Senior Front-End Engineer - Munich, Germany - October 1st, 2015 until February 28th, 2018"
      >
        <p>
          AppDirect is a digital platform that helps other businesses to succeed by offering
          them multiple SaaS solutions. As I senior front-end engineer, I was responsible for
          building important features for monetization suite using React.js. I helped AppDirect
          to provide a theme and additional functionality for a couple of major customers
          including Vodafone, Swisscom, Deutsche Telekom, etc.
        </p>
      </EmployerSection>

      <EmployerSection
        employerName="S&amp;P Global Platts"
        period="Front-End Engineer - Munich, Germany - August 1st, 2014 until September 30th, 2015"
      >
        <p>
          S&amp;P Global Platts originally Minerals Value Service is an analytical tool for the
          iron&amp;ore industry. I worked there as a front-end developer using mostly
          Angular.js, Highcharts, Google Maps API &amp; SVG animations. Minerals Value Service
          was a full single-page-application communicating with back-end through JSON APIs.
        </p>
      </EmployerSection>

      <EmployerSection
        employerName="OrganisedMinds GmbH"
        period="Full-Stack Engineer - Karlsruhe, Germany - March 14th, 2011 until July 31st, 2014"
      >
        <p>
          As a full-stack engineer at OrganisedMinds, I was responsible for building new
          features using Ruby on Rails, jQuery &amp; Backbone.js. OrganisedMinds was a real-time
          application with a lot of advanced drag&amp;drop features at that time. It was my
          first job as a web developer.
        </p>
      </EmployerSection>

      <EmployerSection
        employerName="Eaton Industries s.r.o."
        period="CAD Designer - Chomutov, Czech Republic - November 1st, 2006 until August 31st, 2010"
      >
        <p>
          Eaton produces a vast array of air conditioning lines and components. As a CAD
          Designer at Eaton Industries, I was responsible for the design of new tools and gages
          using CATIA V5. I was also responsible for the layout of the plant and improvements
          in production.
        </p>
      </EmployerSection>
    </CvSection>
  );
}
