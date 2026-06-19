"use client"
import { useEffect } from "react"

export default function RemoveSearchParams() {
  

useEffect(() => {
  
  if(window.location.search){
  const id = setTimeout(() => {
    window.history.replaceState({}, document.title, window.location.pathname)
  }, 1000)
  return () => clearTimeout(id)
}
}, [])

  return <></>
}