import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <aside className='navbar'>
      <NavLink style = {{textDecoration : "none"}} to = "/">Inbox</NavLink>
      <NavLink  style = {{textDecoration : "none"}} to = "/spam">Spam</NavLink>
      <NavLink  style = {{textDecoration : "none"}} to = "/trash">Trash</NavLink>
      <Outlet/>
    </aside>
  )
}

export default NavBar
