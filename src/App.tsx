import React from 'react'
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components'
import { Vector3 } from 'three';
import SampleModel from './components/SampleModel' 
import Controls from './utils/Controls';

export default function App() {
  return (
    <Container>
      <Canvas>
        <SampleModel />
        <Controls  target={new Vector3(-0.08, 1.57, 0.1)}/>
        <directionalLight position={[1, 1, 1]} />
        {/* <gridHelper /> */}
      </Canvas>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`