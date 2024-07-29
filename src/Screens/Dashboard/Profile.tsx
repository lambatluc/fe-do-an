import React from 'react'
import SideBar from './SideBar'
import Uploader from '@/components/Uploader'

const Profile = () => {
  return (
    <SideBar>
      <div className='flex flex-col gap-6'>
        <h2 className='text-xl font-bold'>Profile</h2>
        <Uploader/>
      </div>
    </SideBar>
  )
}

export default Profile
