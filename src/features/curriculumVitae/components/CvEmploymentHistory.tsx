import CvSection from './CvSection';
import EmployerSection from './EmployerSection';

export default function CvEmploymentHistory() {
  return (
    <CvSection title="Employment History">
      <EmployerSection
        employerName="Hewlett Packard Enterprise"
        period="Senior Software Engineer – Munich, Germany – June 1st, 2021 to present"
      >
        <p>
          As a Senior Software Engineer at Hewlett Packard Enterprise, I work on the next-generation
          UI for HPE Ezmeral Data Fabric. It is the industry’s first edge-to-cloud solution that
          natively ingests and stores diverse data types, enables in-place processing, and
          simplifies data access via APIs, languages, and protocols popular with analytics and data
          science consumers.
        </p>

        <p className="mt-2">
          The UI is built using TypeScript, React, Redux, and HPE&apos;s Grommet design system.
          I am responsible for developing a new UI wizard that allows users to install HPE Ezmeral
          Data Fabric software on existing clusters.
        </p>
      </EmployerSection>

      <EmployerSection
        employerName="Xempus AG"
        period="Senior Front-End Engineer – Munich, Germany – April 1st, 2018 to May 31st, 2021"
      >
        <p>
          Xempus is a platform that digitalizes occupational retirement pensions in Germany,
          offering solutions for all stakeholder groups. As a Senior Front-End Engineer,
          I was responsible for the overall front-end architecture and for building reusable
          features across the platform. I also developed and maintained a design system with
          reusable components and patterns. The platform&apos;s services were integrated using
          Docker and Kubernetes.
        </p>
      </EmployerSection>

      <EmployerSection
        employerName="AppDirect, Inc."
        period="Senior Front-End Engineer – Munich, Germany – October 1st, 2015 to February 28th, 2018"
      >
        <p>
          AppDirect is a digital platform that empowers businesses by offering multiple SaaS
          solutions. As a Senior Front-End Engineer, I built key features for the monetization suite
          usingReact.js. I also contributed themes and additional functionality for major clients,
          including Vodafone, Swisscom, and Deutsche Telekom.
        </p>
      </EmployerSection>

      <EmployerSection
        employerName="S&amp;P Global Platts"
        period="Front-End Engineer – Munich, Germany – August 1st, 2014 to September 30th, 2015"
      >
        <p>
          S&amp;P Global Platts (formerly Minerals Value Service) is an analytical tool for the
          iron &amp; ore industry. As a Front-End Engineer, I worked with Angular.js, Highcharts,
          the Google Maps API, and SVG animations. The application was a full single-page app
          communicating with a back-end via JSON APIs.
        </p>
      </EmployerSection>

      <EmployerSection
        employerName="OrganisedMinds GmbH"
        period="Full-Stack Engineer – Karlsruhe, Germany – March 14th, 2011 to July 31st, 2014"
      >
        <p>
          As a Full-Stack Engineer at OrganisedMinds, I developed new features using Ruby on Rails,
          jQuery, and Backbone.js. The application was real-time and included advanced drag-and-drop
          functionality. This was my first role as a web developer.
        </p>
      </EmployerSection>

      <EmployerSection
        employerName="Eaton Industries s.r.o."
        period="CAD Designer – Chomutov, Czech Republic – November 1st, 2006 to August 31st, 2010"
      >
        <p>
          Eaton manufactures a wide range of air conditioning lines and components.
          As a CAD Designer, I was responsible for designing tools and gauges using CATIA V5.
          I also worked on plant layout and production process improvements.
        </p>
      </EmployerSection>
    </CvSection>
  );
}
