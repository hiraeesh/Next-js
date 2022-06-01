import React from 'react'
import Navbar from '../compo/Navbar'
export default function Layout({children}) {
  return (
    <>
   <Navbar />
<main>
    {children}
</main>
</>


  )
}
