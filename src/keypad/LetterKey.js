import React from 'react'
import PropTypes from 'prop-types'
import Key from './Key'

const LetterKey = ({ letter, onPress, ...props }) => (
  <Key
    label={letter}
    shortcut={`Key${letter}`}
    onPress={onPress}
    {...props} />
)

LetterKey.propTypes = {
  letter: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default LetterKey