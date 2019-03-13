import { mount } from 'enzyme'
import React from 'react'
import Keypad from './Keypad'

describe('keypad/Keypad', () => {
  it('has the correct order of buttons', () => {
    const component = mount(
      <Keypad onKeyPress={() => {}} />
    )

    expect(component.text()).toBe([
      'D','E','F','INPT',
      'A','B','C','▲',
      '7','8','9','▼',
      '4','5','6','PROG',
      '1','2','3','ENTR',
      '0','CLR'
    ].join(''))
  })
})
