import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomRoomCreate from '../components/Main/CustomRoomCreate'
import JoinRoom from '../components/Main/JoinRoom'
import MenuBar from '../components/Main/MenuBar'
import MenuButton from '../components/Main/NavigationButton'
import Play from '../components/Main/Play'
import Profile from '../components/Main/Profile'
import LogoSvg from '../images/Svgs'
import '../styles/MainPage.css'

export default function MainPage() {
  return (
    <div className='MainPage'>
      <div className='MainPageContainer'>
        <div className='MainPageContainer__LogoContainer'>
          <LogoSvg />
        </div>

        <div className='MainPageContainer__Content'>
          <Routes>
            <Route path='/RoomCreate' element={<CustomRoomCreate />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/' element={<MenuBar />} />
            <Route path='/Play' element={<Play />} />
            <Route path='/JoinRoom' element={<JoinRoom />} />
          </Routes>
        </div>

      </div>



    </div>
  )
}
