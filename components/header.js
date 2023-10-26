import styles from "../styles/header.module.css"
import animations from "../styles/header_animations.module.css"
import { useRef } from "react"

export default function Header({location}) {

  const initialized = useRef({header: false, icon: false, name: false})

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
    <div className={getHeaderClass()}>
      <div className={getIconClass()}>
        <div/>
      </div>
      <div className={getNameClass()}>Spencer Cheney</div>
    </div>
  )
}