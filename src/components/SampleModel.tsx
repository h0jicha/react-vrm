import React, { Suspense } from 'react'
import VRMAsset from '../utils/VRMAsset'

export default function SampleModel() {
  return (
    <Suspense fallback={null}>
      {/* <VRMAsset url='./models/three-vrm-girl.vrm' /> */}
      <VRMAsset url='./models/PronamaChan.vrm' />
    </Suspense>
  )
}