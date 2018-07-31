import React from 'react'
import './icons.svg'
import style from './icons.css'

const Icon = (props) => (
  <svg className={`${style.icon} icon_${props.name}`}>
    <use xlinkHref={`#icons_${props.name}`} />
  </svg>
)

export default Icon