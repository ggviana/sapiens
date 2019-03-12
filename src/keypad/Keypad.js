import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './keyRegister'
import Key from './Key'
import DigitKey from './DigitKey'
import LetterKey from './LetterKey'

const Container = styled.div`
  align-items: stretch;
  display: grid;
  grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(6, 60px);
  grid-gap: 4px;

  & > [data-zero] {
    grid-column: 1 / span 2;
  }

  & > [data-enter] {
    grid-column: 4;
    grid-row: 5 / span 2;
  }
`

const Keypad = ({ children, onKeyPress }) => {

  const digits = [
    7, 8, 9,
    4, 5, 6,
    1, 2, 3
  ]

  const letters = 'ABCDEF'.split('')

  return (
    <Container>
      {letters.slice(3, 6).map(letter => (
        <LetterKey key={letter} letter={letter} onPress={onKeyPress} />
      ))}

      <Key
        label='PROG'
        onPress={onKeyPress} />

      {letters.slice(0, 3).map(letter => (
        <LetterKey key={letter} letter={letter} onPress={onKeyPress} />
      ))}

      <Key
        label='▲'
        shortcut={'NumpadSubtract'}
        onPress={onKeyPress} />

      {digits.slice(0, 3).map(digit => (
        <DigitKey key={digit} digit={digit} onPress={onKeyPress} />
      ))}

      <Key
        label='▼'
        shortcut={'NumpadAdd'}
        onPress={onKeyPress} />

      {digits.slice(3, 6).map(digit => (
        <DigitKey key={digit} digit={digit} onPress={onKeyPress} />
      ))}

      <Key
        label='MOD'
        shortcut={'NumpadComma'}
        onPress={onKeyPress} />

      {digits.slice(6, 9).map(digit => (
        <DigitKey key={digit} digit={digit} onPress={onKeyPress} />
      ))}

      <Key
        label='ENTR'
        shortcut={'NumpadEnter'}
        onPress={onKeyPress}
        data-enter />

      <DigitKey digit={0} onPress={onKeyPress} data-zero />

      <Key
        label='CLR'
        shortcut={['NumpadDecimal', 'Backspace']}
        onPress={onKeyPress} />
    </Container>
  )
}

Keypad.propTypes = {
  onKeyPress: PropTypes.func
}

export default Keypad
