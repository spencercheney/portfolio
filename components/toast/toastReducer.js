import styles from "./toast.module.css"

export default function toastReducer(values, action) {
  switch (action.type) {
    case "updateLocation": {
      if(action.location == "topLeft") {
        return {
          ...values,
          location: styles.topLeft
        } 
      }  else if(action.location == "bottomLeft") {
        return {
          ...values,
          location: styles.bottomLeft
        }
      }
    }
    case "open": {
      return {
        ...values,
        content: action.content,
        initiateOpen: true
      }
    }
    case "openComplete": {
      return {
        ...values,
        initiateOpen: false
      }
    }
    case "close": {
      return {
        ...values,
        initiateClose: true
      }
    }
    case "closeComplete": {
      return {
        ...values,
        initiateClose: false
      }
    }
    case "resetContent": {
      return {
        ...values,
        content: <></>
      }
    }
  }
}