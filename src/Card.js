import React from 'react'
import './Card.css'
import  PropTypes from 'prop-types'

const HIDDEN_SYMBOL = '❓'

const Card = ( { card , feedback , onClick }) =>  (
    <div className={`card ${feedback}`}>
        <span className="symbol" onClick={ () => onClick(card)}>
            {feedback=== 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    feedback : PropTypes.oneOf([
        'hidden',
        'justMatched',
        'justMisMatched',
        'visible'
    ]).isRequired,
    onCLick: PropTypes.func.isRequired,
}

export default Card