import React from 'react'

interface type{
  click:string
}

function Button({click}:type) {
  return (
    <div className='buttons'>
         {click}
      </div>
  )
}

export default Button
