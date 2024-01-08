'use client'

import useContent from "@/components/UseContent"
import { useEffect, useState } from "react"
import styles from  "@/styles/contact_me.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowLeft, faArrowUp } from "@fortawesome/free-solid-svg-icons"

export default function main() {
  const [showCopy, setShowCopy] = useState(false)
  const [isCopied,  setIsCopied] = useState(false)
  const contentDispatch = useContent()
  
  useEffect(() => {
    contentDispatch({type: "open"})
  }, [])

  function copy() {
    //copy to clipboard
    navigator.clipboard.writeText("spencercheney@gmail.com")
    //notify the user
    setIsCopied(true)
    //reset the notification
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  //used to conditionally render the text
  function CopyText({isCopied}) {
    if(isCopied) {
      return <> Copied!</>
    } else {
      return <> Copy Email</>
    }
  }

  return(<>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.long}>
            <td>Located In:</td>
            <td>Idaho Falls, Idaho</td> 
          </tr>
          <tr className={styles.long} onMouseEnter={() => setShowCopy(true)} onMouseLeave={() => setShowCopy(false)}>
            <td>Email:</td>
            <td>
              <div className={styles.email} onClick={copy}>spencercheney@gmail.com</div>
              {showCopy &&
                <div className={styles.copy}>
                  <FontAwesomeIcon icon={faArrowLeft} className={styles.left}/>

                  <CopyText isCopied={isCopied} />
                  <FontAwesomeIcon icon={faArrowUp} className={styles.up}/>
                </div>
              }
            </td>
          </tr>
          <tr>
            <td>LinkedIn:</td>
            <td>
              <a className={styles.link} href="https://www.linkedin.com/in/spencer-cheney-b86381141/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
            </td>
          </tr>
          <tr>
            <td>Github:</td>
            <td>
              <a className={styles.link} href="https://github.com/spCheney" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </td>
          </tr>
        </tbody>
      </table>
    </>)
}