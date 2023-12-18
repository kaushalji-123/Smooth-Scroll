"use client";

import { ReactLenis } from '@studio-freight/react-lenis'

function SmoothScroll({children}) {
  return (
    <ReactLenis root options={{
        duration:1.5,smoothTouch:true,
    }}>
      {children}
      <button w-5 h3>click me </button>
    </ReactLenis>
  )
}
export default SmoothScroll