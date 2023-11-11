import { useEffect, useState } from "react"
import styles from "../../styles/header.module.css"
import animations from "../../styles/header_animations.module.css"

/**
 * determines which CSS style module to use
 * @param {boolean} isInitialized whether the initial state of the content component has been set
 * @returns animations (will animate on location change) | styles (default)
 */
function useModule(isInitialized) {
  const [module, setModule] = useState(styles)

  useEffect(() => {
    setModule(isInitialized ? animations : styles)
  }, [isInitialized])

  return module
}

/**
 * determines the CSS classes for the main header div (the one that contains everything)
 * @param {string} location "top" | "center" - where the header will be displayed
 * @param {*} module animations | styles
 * @returns an array of classes from a CSS module
 */
function useHeaderClass(location, module) {
  const [headerClass, setHeaderClass] = useState([styles.header, module.headerCenter])

  useEffect(() => {
    const classList = [styles.header]
    if(location == "top") {
      classList.push(module.headerTop)
    } else if(location == "center") {
      classList.push(module.headerCenter)
    }
    setHeaderClass(classList)
  }, [location,  module])

  return  headerClass
}

/**
 * determines the CSS classes for the genie lamp icon
 * @param {string} location "top" | "center" - where the icon will be displayed
 * @param {*} module animations | styles
 * @returns an array of classes from a CSS module
 */
function useIconClass(location, module) {
  const [iconClass, setIconClass] = useState([styles.icon, module.iconCenter])

  useEffect(() => {
    const classList = [styles.icon]
    if(location == "top") {
      classList.push(module.iconTop)
    } else if(location == "center") {
      classList.push(module.iconCenter)
    }
    setIconClass(classList)
  }, [location,  module])

  return  iconClass
}

/**
 * determines the CSS classes for my name
 * @param {string} location "top" | "center" - where my name will be displayed
 * @param {*} module animations | styles
 * @returns an array of classes from a CSS module
 */
function useNameClass(location, module) {
  const [nameClass, setNameClass] = useState([styles.name, module.nameCenter])

  useEffect(() => {
    const classList = [styles.name]
    if(location == "top") {
      classList.push(module.nameTop)
    } else if(location == "center") {
      classList.push(module.nameCenter)
    }
    setNameClass(classList)
  }, [location,  module])

  return  nameClass
}

export { useModule, useHeaderClass, useIconClass,  useNameClass }