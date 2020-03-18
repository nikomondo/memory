import React from 'react'

import './GuessCount.css'
import PropTypes  from 'prop-types'

const GuessCount = ( {guesses}) => <div className="guesses">{guesses} </div> 

GuessCount.prototype = {
    guesses : PropTypes.number.isRequired,
}
export default GuessCount