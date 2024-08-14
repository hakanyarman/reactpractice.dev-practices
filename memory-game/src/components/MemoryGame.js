import React from 'react'
import './MemoryGame.css'


export default function MemoryGame({ images }) {
    return (
        <div className='outer-container'>
            <h1>Memory Game</h1>
            <div className='container'>
                <div className='image-container'>
                    {images.map((imageSrc, index) => {
                        return <img alt='memory-image' src={imageSrc} className='image' key={index} tabIndex={index + 1}></img>
                    })}
                </div>

            </div>
            <button>Start Game</button>
        </div>
    )
}
