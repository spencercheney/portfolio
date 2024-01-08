"use client"

import styles from "../styles/sidebar.module.css"
import BasicComponent from './basic'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCode, faFileArrowDown, faHouse, faBars} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useRef, useState } from "react"

export default function Sidebar({ goToLink }) {
  const list = useRef(null)

  return (
    <div className={styles.sidebar}>
      <BasicComponent>
        <div className={styles.list} ref={list}>
          <button className={styles.link} onClick={ () => goToLink("/", true) }>
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </button>
          <button className={styles.link} onClick={ () => goToLink("/aboutMe", false) }>
            <FontAwesomeIcon icon={faUser} />
            <span>About Me</span>
          </button>
          <button className={styles.link} onClick={ () => goToLink("/projects", false) }>
            <FontAwesomeIcon icon={faCode} />
            <span>Projects</span>
          </button>
          <a href="Resume 12_27_23.pdf" download="Spencer Cheney's Resume.pdf" className={styles.link}>
            <FontAwesomeIcon icon={faFileArrowDown} />          
            <span>Resume</span>
          </a>
          <button className={styles.link}  onClick={ () => goToLink("/contactMe", false) }>
            <FontAwesomeIcon icon={faEnvelope} />          
            <span>Contact Me</span>
          </button>
        </div>

        <DisplayControl list={list}/>
      </BasicComponent>
    </div>
  )
}

function DisplayControl({list}) {
  const [show, setShow] = useState(false)
  const displayControl = useRef(null)

  useEffect(() => {
    const isControlOpen = getComputedStyle(displayControl.current).display != "none"

    if(!isControlOpen || show) {
      list.current.style.display = "inline-block"
    } else {
      list.current.style.display = "none"
    }
  }, [show])

  return (
    <div className={styles.displayControl} ref={displayControl}>
      {!show && 
        <button className={styles.link} onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faBars} />
          Show Navigation
        </button>
      }
      
      {show &&
        <button className={styles.link} onClick={() => setShow(false)}>
          <FontAwesomeIcon icon={faBars} />
          Hide Navigation
        </button>
      }
    </div>
  )
}