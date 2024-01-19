'use client'

import useContent from "@/components/useContent"
import { useEffect } from "react"

function main() {

  useEffect(() => {
    document.title = "Spencer Cheney"
  },  [])
  
  return (<></>)
}

main.displayName = "home"
export default main