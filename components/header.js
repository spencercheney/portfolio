import { useRef } from "react"

import useToast from "./toast/useToast"

import styles from "../styles/header.module.css"
import animations from "../styles/header_animations.module.css"

export default function Header({location}) {

  const initialized = useRef({header: false, icon: false, name: false})
  const toast = useToast()

  // if(location == "top") {
  //   toast.updateLocation("bottomLeft")
  // } else {
  //   toast.updateLocation("topLeft")
  // }

  function showToast() {
    toast.open(<span>
      I've always been entertained by the idea of magic. Believing in powers that can't be explained. This includes
      genies, especially blue ones voiced by Robin Williams.
      <br /><br />
      One of the struggles I often face is my last name getting mispronouced. It's been pronouced ChAYnAY, ChAYnEE, and even
      ShanAYnAY which are all incorrect. The correct pronouciation is ChEEnEE. The easiest way to remember it is that it's
      pronouced the same way as genie but with a ch instead of g, Ch-enie. 
      <br /><br />
      The fact that I enjoy magic and that genies help pronouce my last name is perfect. That's why I've add the lamp and 
      gave this website the domain name.
    </span>)
  }

  /**
   * @returns true if all class functions have been ran at least once
   */
  function isInitialized() {
    return initialized.current.header && initialized.current.icon && initialized.current.name
  }

  /**
   * gets the css module to use
   * @returns animations | styles
   */
  function getModule() {
    if(isInitialized()) {
      return animations
    } else {
      return styles
    }
  }

  /**
   * @returns the css class list
   */
  function getHeaderClass() {
    var classes = [styles.header] //the css class list
    const module = getModule() //the module to use

    initialized.current.header = true //name is being initialized

    //determine which class to use
    if(location == "top") {
      classes.push(module.headerTop)
    } else {
      classes.push(module.headerCenter)
    }

    return classes.join(' ')
  }

  /**
   * @returns the css class list
   */
  function getIconClass() {
    var classes = [styles.icon] //the css class list
    const module = getModule() //the module to use

    initialized.current.icon = true //name is being initialized

    //determine which class to use
    if(location == "top") {
      classes.push(module.iconTop)
    } else {
      classes.push(module.iconCenter)
    }

    return classes.join(' ')
  }

  /**
   * @returns the css class list
   */
  function getNameClass() {
    var classes = [styles.name]
    const module = getModule() //the module to use

    initialized.current.name = true //name is being initialized

    //determine which class to use
    if(location == "top") {
      classes.push(module.nameTop)
    } else {
      classes.push(module.nameCenter)
    }

    return classes.join(' ')
  }

  return (
    <div className={ getHeaderClass() }>
      <div className={ getIconClass() } onClick={ showToast }>
        <div/>
      </div>
      <div className={ getNameClass() }>Spencer Cheney</div>
    </div>
  )
}