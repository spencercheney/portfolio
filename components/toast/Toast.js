import styles from "./toast.module.css"
import useToast from "./useToast"
import { useIsClosed, useLocation } from "./toastHooks"

export default function Toast({ values }) {
  const closeAnimationDuration = 300
  const openAnimationDuration = 100

  const isClosed = useIsClosed(values.initiateClose, values.initiateOpen, closeAnimationDuration, openAnimationDuration)
  const location = useLocation(values.location, isClosed)

  const dispatch = useToast()

  return (
    <div className={ [styles.wrapper, location].join(' ') }>
      {isClosed ? <></> :
      <div className={ values.initiateClose ? [styles.toast, styles.close].join(' ') : styles.toast }>
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