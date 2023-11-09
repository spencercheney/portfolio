import { useEffect, useState } from "react"
import styles from "./toast.module.css"
import useToast from "./useToast"

export default function Toast({ values }) {
  const [isClosed, setIsClosed] = useState(true)
  const [isCloseAnimationOn, setIsCloseAnimationOn] = useState(false)
  const [location, setLocation] = useState(styles.bottomLeft)

  const closeAnimationDuration = 300
  const openAnimationDuration = 100

  useEffect(() => {
    if(!isClosed) {
      dispatch({ type: "close" })
      setTimeout(() => {
        setLocation(values.location)
      }, closeAnimationDuration);
    } else {
      setLocation(values.location)
    }
  }, [values.location])

  const dispatch = useToast()

  useEffect(() => {
    if(values.initiateClose) {
      if(!isClosed) {
        setIsCloseAnimationOn(true)

        setTimeout(() => {
          setIsClosed(true)
          setIsCloseAnimationOn(false)
          dispatch({ type: "resetContent" })
        }, closeAnimationDuration)
      }
      dispatch({ type: "closeComplete" })
    }
  }, [values.initiateClose])    
  
  useEffect(() => {
    if(values.initiateOpen) {
      if(isClosed) {
        setIsClosed(false)
      } else {
        setIsClosed(true)
        setTimeout(() => {
          setIsClosed(false)
        }, openAnimationDuration)
      }
      dispatch({ type: "openComplete" })
    }
  }, [values.initiateOpen])

  return (
    <div className={ [styles.wrapper, location].join(' ') }>
      {isClosed ? <></> :
      <div className={ isCloseAnimationOn ? [styles.toast, styles.close].join(' ') : styles.toast }>
        <div className={ styles.text }>
          { values.content }
        </div>
        <div>
          <button onClick={() => dispatch({type: "close"}) } className={ styles.closeBtn }>x</button>
        </div>
      </div>}
    </div>
  )
}