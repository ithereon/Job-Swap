import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${props => (props.checked ? 'primary' : 'papayawhip')};
  background-color:${props => (props.checked ? '#2077DF' : '#FFFFFF00')};
  border: solid 1px ${props => (props.checked ? '#2077DF' : '#000000FF')};
  border-radius: 3px;
  transition: all 150ms;

  // ${HiddenCheckbox}:focus + & {
  //   box-shadow: 0 0 0 3px ${props => (props.checked ? 'rgba(32,109,214,255)' : 'rgba(0,0,0,0)')};
  // }

  // ${Icon} {
  //   visibility: ${props => (props.checked ? 'hidden' : 'hidden')}
  // }
`

const Checkbox = ({ className, checked, ...props }) => (
  <div style={{ fontFamily: 'system-ui' }}>
    <label>
      <CheckboxContainer className={className}>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          {/* <Icon viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Icon> */}
        </StyledCheckbox>
      </CheckboxContainer>
      <span style={{ marginLeft: 8 }}>Option</span>
    </label>
  </div>
)

export default Checkbox
