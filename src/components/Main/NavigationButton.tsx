
import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationButton(props: { label: string, path: string }) {
	return (

		<div className='NavigationButton' ><Link to={props.path} >{props.label}</Link></div>



	)
}
