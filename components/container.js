import BasicComponent from "./basic"

import styles from "@/styles/container.module.css"

import { useRef } from "react"

export default function Container({ open, initialized, children } ) {

  // const initialized = useRef(false)

  function getClass() {
    var classes = [styles.container]
    
    if(initialized) {
      if(open) {
        classes.push(styles.openAnimate)
      } else {
        classes.push(styles.closeAnimate)
      }
    } else {
      // initialized.current = true

      if(open) {
        classes.push(styles.opened)
      } else {
        classes.push(styles.closed)
      }
    }

    return classes.join(' ')
  }

  return (
    <div className={getClass()}>
      <BasicComponent style={{width: "100%", height: "100%"}}>
        {children}
      </BasicComponent>
    </div>
  )
}