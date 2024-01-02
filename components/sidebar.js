import styles from "../styles/sidebar.module.css"
import BasicComponent from './basic'
import Link from 'next/link'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCode, faMagnifyingGlassChart, faFileArrowDown, faGamepad } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function Sidebar({ goToLink }) {
  return (
    <div className={styles.sidebar}>
      <BasicComponent>
        <button className={styles.link} onClick={ () => goToLink("/aboutMe", false) }>
          <FontAwesomeIcon icon={faUser} />
          <span>About Me</span>
        </button>
        <Link href="/aboutMe" className={styles.link}>
          <FontAwesomeIcon icon={faCode} />
          <span>Projects</span>
        </Link>
        <Link href="/aboutMe" className={styles.link}>
          <FontAwesomeIcon icon={faFileArrowDown} />          
          <span>Resume</span>
        </Link>
        <button className={styles.link}  onClick={ () => goToLink("/contactMe", false) }>
          <FontAwesomeIcon icon={faEnvelope} />          
          <span>Contact Me</span>
        </button>
      </BasicComponent>
    </div>
  )
}