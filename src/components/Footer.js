import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className='footer'>
        <small>BasitDevelops © {year}. All Rights Reserved.</small>
    </div>
  )
}
