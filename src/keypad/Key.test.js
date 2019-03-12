import { shallow, mount } from 'enzyme'
import React from 'react'
import Key from './Key'

const wait = time => new Promise(resolve => window.setTimeout(resolve, time))

describe('keypad/Key', () => {
  it('renders the label specified', () => {
    const onClick = jest.fn()

    const component = shallow(
      <Key
        label='ENTR'
        shortcut='NumpadEnter'
        onPress={onClick} />
    )
    
    expect(component.text()).toBe('ENTR')
  })

  it('triggers when key is clicked', () => {
    const onClick = jest.fn()

    const component = shallow(
      <Key
        label='ENTR'
        shortcut='NumpadEnter'
        onPress={onClick} />
    )

    component.simulate('click')

    expect(onClick).toHaveBeenCalled()
  })
})
