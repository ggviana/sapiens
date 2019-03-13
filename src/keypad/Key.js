import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { register, unregister } from './keyRegister'

const ANIMATION_TIME = 100

const Container = styled.button`
  background-color: #2C272D;
  background-image: radial-gradient(1px at 50% 50% ,rgba(255, 255, 255, .3) 0%,rgba(255, 255, 255, .1) 10px,rgba(0, 0, 0,.7) 30px);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  outline: 0;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000;
  transform: ${props => props.active ? 'scale(.96)' : 'none'};
  transition: transform ${ANIMATION_TIME}ms ease-in-out;
  width: 100%;

  &:focus, &:focus-within {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(.98);
  }
`

export default class Key extends React.Component {
  static propTypes = {
    label: PropTypes.any,
    onPress: PropTypes.func.isRequired,
    shortcut: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string
    ])
  }

  state = {
    active: false
  }

  onPressStart = () => {
    this.setState({ active: true })
  }

  onPressEnd = () => {
    this.props.onPress(this.props.label)

    window.setTimeout(() => this.setState({ active: false }), ANIMATION_TIME)
  }

  componentDidMount() {
    register(this.props.shortcut, {
      onPressStart: this.onPressStart,
      onPressEnd: this.onPressEnd
    })
  }

  componentWillUnmount () {
    unregister(this.props.shortcut)
  }

  render() {
    const { label, onPress, ...props } = this.props
    return (
      <Container
        active={this.state.active}
        onClick={event => {
          this.onPressStart()
          this.onPressEnd()
        }}
        onTouchStart={this.onPressStart}
        onTouchEnd={this.onPressEnd}
        {...props}>
        {label}
      </Container>
    )
  }
}