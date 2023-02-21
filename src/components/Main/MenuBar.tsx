import React from 'react'
import MenuButton from './NavigationButton'

export default function MenuBar() {
	return (
		<div className='MenuBarContainer'>
			<MenuButton label='Play' path='/Play' />
			<MenuButton label='Create room' path='/RoomCreate' />
			<MenuButton label='Join room' path='/JoinRoom' />
			<MenuButton label='Profile' path='/Profile' />


		</div>
	)
}
