"use client"

import { useEffect } from "react"

export default function RemoveSearchParams() {
    useEffect(()=>{
        window.history.replaceState({},document.title, window.location.pathname)
    },[])
  return (
    <></>
  )
}
