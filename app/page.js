import Component from "../components/basic.js"
import Link from 'next/link'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faCode, faMagnifyingGlassChart, faFileArrowDown } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"


export default function main() {
  return (
    <>
      <div className="header">Spencer Cheney</div>
      <Component style={{width: 400, marginTop: 30, marginLeft: 120}}>
        <Link href="/aboutMe" className="link">
          <FontAwesomeIcon icon={faUser} />
          <span>About Me</span>
        </Link>
        <Link href="/aboutMe" className="link">
          <FontAwesomeIcon icon={faCode} />
          <span>Projects</span>
        </Link>
        <Link href="/aboutMe" className="link">
          <FontAwesomeIcon icon={faMagnifyingGlassChart} />
          <span>Data</span>
        </Link>
        <Link href="/aboutMe" className="link">
          <FontAwesomeIcon icon={faFileArrowDown} />          
          <span>Resume</span>
        </Link>
        <Link href="/aboutMe" className="link">
          <FontAwesomeIcon icon={faEnvelope} />          
          <span>Contact Me</span>
        </Link>
      </Component>
    </>
  )
}