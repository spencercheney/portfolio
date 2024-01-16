'use client'

import useContent from "@/components/useContent"
import { useEffect } from "react"

export default function main() {
  const contentDispatch = useContent()

  useEffect(() => {
    contentDispatch({type: "close"})
    document.title = "Spencer Cheney"
  },  [])
  
  return (<></>)
}