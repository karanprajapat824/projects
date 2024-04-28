import React from 'react'
import styled from 'styled-components';
const Output = (props) => {

    const Container = styled.div`${props.css}`;
  return (
    <div>
        <Container dangerouslySetInnerHTML={{ __html: props.html}} />
    </div>
  )
}

export default Output