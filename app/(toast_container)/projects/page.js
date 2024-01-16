'use client'

import useContent from "@/components/useContent"
import { useEffect, useState } from "react"
import styles from  "@/styles/projects.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowUp, faCircleArrowDown } from "@fortawesome/free-solid-svg-icons"

export default function main() {
  const contentDispatch = useContent()
  
  useEffect(() => {
    contentDispatch({type: "open"})
    document.title = "Spencer Cheney - Projects"
  }, [])

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
            <td>Bootstrap and Custom CSS</td>
          </tr>
          <tr style={{marginBottom: 0}}>
            <td colSpan={2}>Summary:</td>
          </tr>
          <tr>
            <td colSpan={2}>
              R-Matrix is a <a href="https://www.ibm.com/docs/en/engineering-lifecycle-management-suite/doors/9.7.0?topic=overview-doors" target="new">IBM DOORS</a> replacement. It's a project management application used to track 
              requirements. It aids in turning them into tasks and tracks the development, testing, completion, and delivery of them. I aided in maintaining the legacy code and making improvements to the user expirence on the frontend
              and reduce loading times on the backend. Improvements to the user interface was done by interacting the latest version of Bootstrap and jQuery and adding custom CSS styling. I used the combination of the libary and added 
              the custom styling as needed to bring attention to sections the user's will interact with to help direct the expirience. The biggest improvements to loading times was done through spliting basic SQL queries into advanced
              ones that only get the needed data. This reduced the amount of objects that were created and the information gathered from the database without changing the user expirience on the frontend.
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
            <td>Custom CSS</td>
          </tr>
          <tr style={{marginBottom: 0}}>
            <td colSpan={2}>Summary:</td>
          </tr>
          <tr>
            <td colSpan={2}>
              Transcom is used to monitor the transportation of various forms of nuclear material. Users are able to view shipment data such as the position and route. Admins are able to view and manage organization data and the 
              users within. My work on this project was split into two parts, network security and web development. I was tasked by the client to secure the servers in their network to meet the CIS Benchmark standards. Through 
              editing the Group Policy and the Firewall permissions I was able to reach a score of 98% on the CIS Benchmark on each of their servers. My web development work was focused on privilege and access permission. I used 
              custom CSS to update the layout of the application to display the information and description of each of the priviledges as the admins are setting them. I added the functionality to upload and store the paperwork the 
              user needs in order to access the application. Along with this, I added daily automated checks to ensure each user has uploaded the paperwork needed in order for them to acess the applicatiton and remove their access if 
              they don't.
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
              Serving as the build manager for the project I created builds for all of the client's applications and documented them as moved from a state of development, test, and then delivered. In addition to the builds, I
              managed the code repositories in Subversion version control, creating branches and tags to create and update the code versions.
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
            <td>Bootstrap and Custom CSS</td>
          </tr>
          <tr style={{marginBottom: 0}}>
            <td colSpan={2}>Summary:</td>
          </tr>
          <tr>
            <td colSpan={2}>
              The Licensing Dashboard is a project I oversaw from creation until it was live in production. It's an application for users to submit requests to get a license key for each of the NRC Codes. After the requests 
              are submitted the users can view the status of them as admins take the requests through the approval process. I used LDAP for authentication so that the users could use their existing Active Directory account. 
              I set up a Microsoft SQL Server to store the data and I continued to manage the database as it went into production. Under the direction of the client I create a user friendly interface using Vue.js and Bootstrap. 
              My best work on the project was reducing the loading times on the backend. I did this by analyzing transfer rates and switching single-threaded, problematic functions into multithreaded. This reduced loading times by 
              over 30 seconds.
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
            <td>Custom CSS</td>
          </tr>
          <tr style={{marginBottom: 0}}>
            <td colSpan={2}>Summary:</td>
          </tr>
          <tr>
            <td colSpan={2}>
              This is a paid freelance project I did for a local boxing gym. I was given a color scheme and I took various existing logos they had and recreated them in Affinity Designer to increase the resolution and so they would 
              work with the website. Using the color scheme and the logos I put together a layout that displays their company information. This allowed information to be easily pased to members of the gym. Once the layout was finished, 
              I added a admin screen so that the owners and managers of the gym could upload sign up paperwork or pictures and posts about the current events of the gym. These posts and pictures were viewed from an added newsfeed 
              section of the website. Since the application was finished I have continued to provide code updates and additional tech assistance as needed.
            </td>
          </tr>
        </Project>
      </div>   
    </>)
}

function Project({title, children}) {
  const [showChildren, setShowChildren] = useState(false)

  return (<>
    <div className={styles.title}>{title}</div>

    {showChildren && 
      <table className={styles.data}>
        <tbody>
          <tr>
            <td colSpan={2}>Technology</td>
          </tr>
          {children}
        </tbody>
      </table>
    }

    {showChildren &&
      <span className={styles.dropdown} onClick={() => setShowChildren(false)}>Show Less <FontAwesomeIcon icon={faCircleArrowUp} /> </span>
    }

    {!showChildren &&
      <span className={styles.dropdown} onClick={() => setShowChildren(true)}>Show More <FontAwesomeIcon icon={faCircleArrowDown} /> </span>
    }
  </>)
}