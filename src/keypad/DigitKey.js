import React from 'react'
import PropTypes from 'prop-types'
import Key from './Key'

const DigitKey = ({ digit, onPress, ...props }) => (
  <Key
    label={digit}
    shortcut={['Numpad', 'Digit'].map(code => `${code}${digit}`)}
    onPress={onPress}
    {...props} />
)

DigitKey.propTypes = {
  digit: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  onPress: PropTypes.func.isRequired
}

export default DigitKey
