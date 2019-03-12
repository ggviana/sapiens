---
name: 'fcomponent'
description: 'Generate a functional component'
message: 'Please enter the component name'
root: 'src'
output: '**/*'
ignore: []
---

# `{{ input | pascal }}.js`

```javascript
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
`

const {{ input | pascal }} = ({ children }) => {
  return (
    <Container>
      <p>{{ input | pascal }}</p>
      {children}
    </Container>
  )
}

{{ input | pascal }}.propTypes = {
  
}

export default {{ input | pascal }}
```

# `{{ input | pascal }}.test.js`

```javascript

describe('{{ output | replace "^.*src/(.*?)(.test)?.js" "$1" }}', () => {
  it('', () => {

  })
})
```