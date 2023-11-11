export default function contentReducer(values, action) {
  switch (action.type) {
    case "open": {
      return {
        ...values,
        isClosed: false,
        headerLocation: "top"
      }
    }
    case "close": {
      return {
        ...values,
        isClosed: true,
        headerLocation: "center"
      }
    }
    case "update": {
      return {
        isInitialized: true,
        isClosed: action.isClosed,
        headerLocation: action.isClosed ? "center" : "top"
      }
    }
  }
}