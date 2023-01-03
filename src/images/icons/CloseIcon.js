import React from 'react'

export default function CloseIcon({ onClick }) {
    return (
        <svg onClick={onClick} width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.8306 27L15.8306 15M27.8306 15L15.8306 27" stroke="#888888" stroke-width="2" stroke-linecap="round" />
            <path d="M21.8306 41C32.8763 41 41.8306 32.0457 41.8306 21C41.8306 9.9543 32.8763 1 21.8306 1C10.7849 1 1.83057 9.9543 1.83057 21C1.83057 32.0457 10.7849 41 21.8306 41Z" stroke="#888888" stroke-width="2" />
        </svg>

    )
}
