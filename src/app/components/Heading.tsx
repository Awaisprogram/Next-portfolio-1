import React from 'react'

interface assert{
  title:string
  subtitle:string
}

function Heading({title,subtitle}:assert) {
  return (
    <div className='head'>
      <h2>{title}</h2>
      <h1 className='subtitle'>{subtitle}</h1>
    </div>
  )
}

export default Heading
