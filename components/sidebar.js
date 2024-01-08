"use client"

import styles from "../styles/sidebar.module.css"
import BasicComponent from './basic'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCode, faFileArrowDown, faHouse, faBars} from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { useEffect, useRef, useState } from "react"

export default function Sidebar({ goToLink }) {
  const [show, setShow] = useState(false)
  const list = useRef(null)
  const displayControl = useRef(null)

  useEffect(() => {
    const isControlOpen = getComputedStyle(displayControl.current).display != "none"

    if(!isControlOpen || show) {
      list.current.style.display = "block"
    } else {
      list.current.style.display = "none"
    }
  }, [show])

  function click(link) {
    setShow(false)
    goToLink(link, link == "/")
  }

  return (
    <div className={styles.sidebar}>
      <BasicComponent>
        <div className={styles.list} ref={list}>
          <button className={styles.link} onClick={ () => click("/") }>
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </button>
          <button className={styles.link} onClick={ () => click("/aboutMe")}>
            <FontAwesomeIcon icon={faUser} />
            <span>About Me</span>
          </button>
          <button className={styles.link} onClick={ () => click("/projects") }>
            <FontAwesomeIcon icon={faCode} />
            <span>Projects</span>
          </button>
          <a href="Resume 1_8_2024.pdf" download="Spencer Cheney's Resume.pdf" className={styles.link}>
            <FontAwesomeIcon icon={faFileArrowDown} />          
            <span>Resume</span>
          </a>
          <button className={styles.link} onClick={ () => click("/contactMe") }>
            <FontAwesomeIcon icon={faEnvelope} />          
            <span>Contact Me</span>
          </button>
        </div>

        <DisplayControl displayControl={displayControl} show={show} setShow={setShow}/>
      </BasicComponent>
    </div>
  )
}

function DisplayControl({displayControl, show, setShow}) {
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