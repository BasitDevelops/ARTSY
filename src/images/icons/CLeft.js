import React from 'react'

export default function CLeft({ onClick }) {
    return (
        <svg className='carousel-btns' onClick={onClick} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_433_225)">
                <path d="M8.94469 9.85521L12.791 6.00888L11.6923 4.91016L6.74724 9.85521L11.6923 14.8003L12.791 13.7015L8.94469 9.85521Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_433_225">
                    <rect width="18.6488" height="18.6488" fill="white" transform="matrix(-1 0 0 1 19.1798 0.530762)" />
                </clipPath>
            </defs>
        </svg>
    )
}
