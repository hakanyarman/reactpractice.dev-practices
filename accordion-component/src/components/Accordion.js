import React, { useState } from 'react';
import './Accordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

export default function Accordion({ items }) {
    const [visibility, setVisibility] = useState(
        items.map(() => false)
    );

    const toggleVisibility = (index) => {
        setVisibility((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className='accordion'>
            {items.map((item, index) => (
                <div className='accordion-item' key={index} tabIndex={index + 1}>

                    <h3>
                        {item.title}
                        <FontAwesomeIcon
                            className='icon'
                            icon={visibility[index] ? faMinus : faPlus}
                            onClick={() => toggleVisibility(index)}
                        />
                    </h3>

                    {visibility[index] && (
                        <div className='accordion-item-content'>
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
