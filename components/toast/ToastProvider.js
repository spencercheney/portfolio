import { useState, useMemo } from "react";

import ToastContext from "./ToastContext";
import Toast from "./Toast";

import styles from "./toast.module.css"

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  function open(content) {
    setToasts(prevToasts  => [
      ...prevToasts,  
      {
        id: Date.now(), 
        content
      }
    ])
  }

  function close(id) {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id != id))
  }

  const contextValue = useMemo(() => ({ open }), [])

  return (
    <ToastContext.Provider value={ contextValue }>
      { children }

      <div className={ styles.wrapper }>
        {toasts.map(toast => (
          <Toast key={ toast.id } close={ () => close(toast.id) }>
            { toast.content }
          </Toast>
        ))}
      </div>,
    </ToastContext.Provider>
  )
}