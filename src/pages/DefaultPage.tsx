import DropdownMenu from '@/components/DropdownMenu'
import Navbar from '@/components/Navbar'
import { Outlet } from 'react-router-dom'

const DefaultPage = () => {
  return (
    <>
      <Navbar />
      <DropdownMenu />
      <Outlet />
    </>
  )
}

export default DefaultPage