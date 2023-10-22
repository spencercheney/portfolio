import styles from "../styles/header.module.css"
import animations from "../styles/header_animations.module.css"
import { useRef } from "react"

export default function Header({location}) {

  const initialized = useRef({header: false, icon: false, name: false})

  function isInitialized() {
    return initialized.current.header && initialized.current.icon && initialized.current.name
  }

  function getHeaderClass() {
    var classes = [styles.header] //the css class list
    var module = null //the module to use

    //figure out which module to use
    if(isInitialized()) {
      module = animations
    } else {
      module = styles
      initialized.current.header = true //name is being initialized
    }

    if(location == "top") {
      classes.push(module.headerTop)
    } else {
      classes.push(module.headerCenter)
    }

    return classes.join(' ')
  }

  function getIconClass() {
    var classes = [styles.icon] //the css class list
    var module = null //the module to use

    //figure out which module to use
    if(isInitialized()) {
      module = animations
    } else {
      module = styles
      initialized.current.icon = true //name is being initialized
    }

    if(location == "top") {
      classes.push(module.iconTop)
    } else {
      classes.push(module.iconCenter)
    }

    return classes.join(' ')
  }

  function getNameClass() {
    var classes = [styles.name]
    var module = null //the module to use

    //figure out which module to use
    if(isInitialized()) {
      module = animations
    } else {
      module = styles
      initialized.current.name = true //name is being initialized
    }

    if(location == "top") {
      classes.push(module.nameTop)
    } else {
      classes.push(module.nameCenter)
    }

    return classes.join(' ')
  }

  return (
    <div className={getHeaderClass()}>
      <div className={getIconClass()}></div>
      <div className={getNameClass()}>Spencer Cheney</div>
    </div>
  )
}