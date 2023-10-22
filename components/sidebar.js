import styles from "../styles/sidebar.module.css"
import BasicComponent from './basic'
import Link from 'next/link'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCode, faMagnifyingGlassChart, faFileArrowDown, faGamepad } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function Sidebar({moveHeader}) {
  return (
    <div className={styles.sidebar}>
      <BasicComponent>
        <Link href="/aboutMe" className={styles.link}>
          <FontAwesomeIcon icon={faUser} />
          <span>About Me</span>
        </Link>
        <Link href="/aboutMe" className={styles.link}>
          <FontAwesomeIcon icon={faCode} />
          <span>Projects</span>
        </Link>
        <Link href="/aboutMe" className={styles.link}>
          <FontAwesomeIcon icon={faMagnifyingGlassChart} />
          <span>Data</span>
        </Link>
        <Link href="/aboutMe" className={styles.link}>
          <FontAwesomeIcon icon={faFileArrowDown} />          
          <span>Resume</span>
        </Link>
        <Link href="/aboutMe" className={styles.link}>
          <FontAwesomeIcon icon={faEnvelope} />          
          <span>Contact Me</span>
        </Link>
      </BasicComponent>
      <BasicComponent style={{marginTop: 40}}>
        <button className={styles.link} style={{width: "100%", textAlign: "center"}} onClick={moveHeader}>
          <FontAwesomeIcon icon={faGamepad} />
          Play a Game
        </button>
      </BasicComponent>
    </div>
  )
}