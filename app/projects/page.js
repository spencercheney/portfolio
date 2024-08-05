'use client'

import { useState } from "react"
import styles from  "@/styles/projects.module.css"

export default function main() {
  return(<>
      <div className={styles.column} style={{ marginRight: "20px" }}>
        <Project title={<>R-Matrix - <a href="https://www.islinc.com/products/matrix" target="new">islinc.com/products/matrix</a></>}>
          <tr>
            <td>Database:</td>
            <td>Microsoft SQL Server</td>
          </tr>
          <tr>
            <td>Database Access:</td>
            <td>Hibernate (ORM)</td>
          </tr>
          <tr>
            <td>Backend Access:</td>
            <td>DWR (AJAX)</td>
          </tr>
          <tr>
            <td>Backend Language:</td>
            <td>Java</td>
          </tr>
          <tr>
            <td>Frontend Language:</td>
            <td>JSP and JavaScript</td>
          </tr>
          <tr>
            <td>Styling:</td>
            <td>Bootstrap and CSS</td>
          </tr>
          <tr style={{marginBottom: 0}}>
            <td colSpan={2}>Summary:</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>
                R-Matrix is a <a href="https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/doors/9.7.0?topic=overview-doors" target="new">IBM DOORS</a> replacement. It's a project management application used to track
                requirements. It aids in turning them into tasks and tracks the development, testing, completion, and delivery of them. I aided in maintaining the legacy code and making improvements to the user expirence on the frontend
                and reduce loading times on the backend. Improvements to the user interface was done by interacting the latest version of Bootstrap and jQuery and adding custom CSS styling. I used the combination of the libary and added
                the custom styling as needed to bring attention to sections the user's will interact with to help direct the expirience. The biggest improvements to loading times was done through spliting basic SQL queries into advanced
                ones that only get the needed data. This reduced the amount of objects that were created and the information gathered from the database without changing the user expirience on the frontend.
              </p>
            </td>
          </tr>
        </Project>

        <br/><br/>
        <Project title={<>Transcom - <a href="https://tcc.transcom.energy.gov/" target="new">tcc.transcom.energy.gov</a></>}>
          <tr>
            <td>Database:</td>
            <td>Oracle</td>
          </tr>
          <tr>
            <td>Database Access:</td>
            <td>JDBC</td>
          </tr>
          <tr>
            <td>Backend Access:</td>
            <td>DWR (AJAX)</td>
          </tr>
          <tr>
            <td>Backend Language:</td>
            <td>Java</td>
          </tr>
          <tr>
            <td>Frontend Language:</td>
            <td>JSP and JavaScript</td>
          </tr>
          <tr>
            <td>Styling:</td>
            <td>CSS</td>
          </tr>
          <tr style={{marginBottom: 0}}>
            <td colSpan={2}>Summary:</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>
                Transcom is used to monitor the transportation of various forms of nuclear material. Users are able to view shipment data such as the position and route. Admins are able to view and manage organization data and the
                users within. My work on this project was split into two parts, network security and web development. I was tasked by the client to secure the servers in their network to meet the CIS Benchmark standards. Through
                editing the Group Policy and the Firewall permissions I was able to reach a score of 98% on the CIS Benchmark on each of their servers. My web development work was focused on privilege and access permission. I used
                custom CSS to update the layout of the application to display the information and description of each of the priviledges as the admins are setting them. I added the functionality to upload and store the paperwork the
                user needs in order to access the application. Along with this, I added daily automated checks to ensure each user has uploaded the paperwork needed in order for them to acess the applicatiton and remove their access if
                they don't.
              </p>
            </td>
          </tr>
        </Project>

        <br/><br/>
        <Project title="WDS">
          <tr>
            <td>Server:</td>
            <td>Apache</td>
          </tr>
          <tr>
            <td>Build Tool:</td>
            <td>Team City</td>
          </tr>
          <tr>
            <td>Build Tracking and Documentation:</td>
            <td>R-Matrix</td>
          </tr>
          <tr style={{marginBottom: 0}}>
            <td colSpan={2}>Summary:</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>
                Serving as the build manager for the project I created builds for all of the client's applications and documented them as moved from a state of development, test, and then delivered. In addition to the builds, I
                managed the code repositories in Subversion version control, creating branches and tags to create and update the code versions.
              </p>
            </td>
          </tr>
        </Project>
      </div>

      <div className={styles.column}>
        <Project title="NRC Codes Licensing Dashboard">
          <tr>
            <td>Database:</td>
            <td>Microsoft SQL Server</td>
          </tr>
          <tr>
            <td>Database Access:</td>
            <td>Hibernate (ORM)</td>
          </tr>
          <tr>
            <td>Backend Access:</td>
            <td>DWR (AJAX)</td>
          </tr>
          <tr>
            <td>Backend Language:</td>
            <td>Java</td>
          </tr>
          <tr>
            <td>Frontend Language:</td>
            <td>Vue.js</td>
          </tr>
          <tr>
            <td>Styling:</td>
            <td>Bootstrap and CSS</td>
          </tr>
          <tr style={{marginBottom: 0}}>
            <td colSpan={2}>Summary:</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>
                The Licensing Dashboard is a project I oversaw from creation until it was live in production. It's an application for users to submit requests to get a license key for each of the NRC Codes. After the requests
                are submitted the users can view the status of them as admins take the requests through the approval process. I used LDAP for authentication so that the users could use their existing Active Directory account.
                I set up a Microsoft SQL Server to store the data and I continued to manage the database as it went into production. Under the direction of the client I create a user friendly interface using Vue.js and Bootstrap.
                My best work on the project was reducing the loading times on the backend. I did this by analyzing transfer rates and switching single-threaded, problematic functions into multithreaded. This reduced loading times by
                over 30 seconds.
              </p>
            </td>
          </tr>
        </Project>

        <br/><br/>
        <Project title={<>Razor's Edge Boxing Club - <a href="https://razorsedgeboxingclub.com/" target="new">razorsedgeboxingclub.com</a></>}>
          <tr>
            <td>Database:</td>
            <td>Firebase</td>
          </tr>
          <tr>
            <td>Database Access:</td>
            <td>Firebase JavaScript SDK</td>
          </tr>
          <tr>
            <td>Frontend Language:</td>
            <td>React</td>
          </tr>
          <tr>
            <td>Styling:</td>
            <td>CSS</td>
          </tr>
          <tr style={{marginBottom: 0}}>
            <td colSpan={2}>Summary:</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>
                This is a paid freelance project I did for a local boxing gym. I was given a color scheme and I took various existing logos they had and recreated them in Affinity Designer to increase the resolution and so they would
                work with the website. Using the color scheme and the logos I put together a layout that displays their company information. This allowed information to be easily pased to members of the gym. Once the layout was finished,
                I added a admin screen so that the owners and managers of the gym could upload sign up paperwork or pictures and posts about the current events of the gym. These posts and pictures were viewed from an added newsfeed
                section of the website. Since the application was finished I have continued to provide code updates and additional tech assistance as needed.
              </p>
            </td>
          </tr>
        </Project>

        <br/><br/>
        <Project title={<>Toasty-React - <a href="https://www.npmjs.com/package/toasty-react" target="new">npmjs.com/package/toasty-react</a></>}>
          <tr>
            <td>Language:</td>
            <td>Typescript</td>
          </tr>
          <tr>
            <td>Framework:</td>
            <td>React</td>
          </tr>
          <tr>
            <td>Styling:</td>
            <td>CSS</td>
          </tr>
          <tr style={{marginBottom: 0}}>
            <td colSpan={2}>Summary:</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <p>
                When building my portfolio I built a basic toast notification. After completing my portfolio, I realized that this toast could be seperated into a npm package that could be used in any React project. I expanded the feature
                set and got it published as a public npm package. Typescript was used to ensure type consistency and anticipate/prevent future bugs. Some of the features include...
              </p>
              <ul style={{margin: 0}}>
                <li>CSS values of the toast can be set so it matches the styling of their project</li>
                <li>Developers are able to set the toast to six available locations</li>
                <li>Toast can display a string of characters or a React component</li>
                <li>The duration of the toast and any of the animation timing can be changed</li>
              </ul>
            </td>
          </tr>
        </Project>
      </div>
    </>)
}

function Project({title, children}) {
  const [showDetails, setShowDetails] = useState(false)

  return (<section>
    <h3 className={styles.title}>{title}</h3>

    <details aria-labelledby="project">
        <table className={styles.data} aria-label="project information" id="project">
          <tbody>
            <tr>
              <td colSpan={2}>Technology</td>
            </tr>
            {children}
          </tbody>
        </table>
        <summary className={styles.dropdown} onClick={ () => setShowDetails(prevState => !prevState) }>{ showDetails ? "Hide Details" : "Show Details" }</summary>
      </details>
  </section>)
}