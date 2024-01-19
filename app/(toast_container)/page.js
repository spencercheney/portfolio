'use client'

import useContent from "@/components/useContent"
import { useEffect } from "react"

function main() {
  const contentDispatch = useContent()

  useEffect(() => {
    contentDispatch({type: "close"})
    document.title = "Spencer Cheney"
  },  [])
  
  return (<></>)
}

main.displayName = "home"
export default main