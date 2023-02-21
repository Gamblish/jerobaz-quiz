import React from 'react'
import NavigationButton from './NavigationButton'
import Avatar from '../../images/3x.png'

export default function Profile() {
  return (
    <div className='Profile'>
      <NavigationButton label='Back' path='/' />
      <div className='Profile__Container'>
        <div className='Profile__Container__Img'>
          <img src={Avatar}></img>

        </div>



        <div className='Profile__Container__Nickname'>
          Никнейм



        </div>

        <div className='Profile__Container__email'>
          Почта

        </div>
        <div className='Profile__Container__ChangePassword'>

          <div>старый пароль</div>
          <div>Нови парол</div>

        </div>
        <div className='Profile__Container__Exit'>
          Вызод



        </div>

      </div>






    </div>
  )
}
