import React from 'react'
import './Card.css'

const HIDDEN_SYMBOL = '❓'

const Card = ( { card , feedback , onClick }) =>  (
    <div className={`card ${feedback}`}>
        <span className="symbol" onClick={ () => onClick(card)}>
            {feedback=== 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card