export default function contentReducer(values, action) {
  switch (action.type) {
    case "open": {
      return {
        ...values,
        isClosed: false
      }
    }
    case "close": {
      return {
        ...values,
        isClosed: true
      }
    }
    case "update": {
      return {
        isInitialized: true,
        isClosed: action.isClosed
      }
    }
  }
}