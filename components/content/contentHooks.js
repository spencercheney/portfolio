import styles from "@/styles/container.module.css"
import { useEffect, useState } from "react"

/**
 * loads the CSS class for the main content component
 * @param {boolean} isClosed is the content component open or closed
 * @param {boolean} isInitialized whether the content component being open or closed has been initially set
 * @returns array of classes from a style module
 */
function useClassList(isClosed, isInitialized) {
  const [classList, setClassList] = useState([styles.container, styles.closed])

  useEffect(() =>  {
    if(isInitialized) {
      if(isClosed) {
        setClassList([styles.container, styles.closeAnimate])
      } else {
        setClassList([styles.container, styles.openAnimate])
      }
    } else {
      if(isClosed) {
        setClassList([styles.container, styles.closed])
      } else {
        setClassList([styles.container, styles.open])
      }
    }
  }, [isClosed])

  return classList
}

function useChildrenClass(isClosed) {
  const [childrenClass, setChildrenClass] = useState(styles.children)
  const [lastClosedValue, setLastClosedValue] = useState(undefined)

  useEffect(() => {
    if(lastClosedValue == undefined) {
      setLastClosedValue(isClosed)
    } else if(lastClosedValue != isClosed) {
      setLastClosedValue(isClosed)
      setChildrenClass(styles.hide)
      setTimeout(() => setChildrenClass(styles.children), 700)
    }
  }, [isClosed])

  return childrenClass
}

export { useClassList, useChildrenClass }