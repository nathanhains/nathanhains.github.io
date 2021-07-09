import React from 'react'

const LightbulbBottom = ({clicked}) => {

    return (
        <div class={clicked === "no" ? "area-bottom" : "hidden"}>
        <h1 class={clicked === "no" ? "turn-on-the-light" : "hidden"}>Turn on the light</h1>
        <div class={clicked === "no" ? "fixture-bottom" : "hidden"}>
          <div class={clicked === "no" ? "strip-bottom" : "hidden"}></div>
          <div class={clicked === "no" ? "strip-bottom" : "hidden"}></div>
          <div class={clicked === "no" ? "strip-bottom" : "hidden"}></div>
        </div>
        <div class={clicked === "no" ? "bulb-bottom" : "hidden"}>
          
          <div class={clicked === "no" ? "zig-bottom" : "hidden"}></div>
          <div class={clicked === "no" ? "zig-bottom" : "hidden"}></div>
          <div class={clicked === "no" ? "zig-bottom" : "hidden"}></div>
        </div>
        </div>
        )
    
}

export default LightbulbBottom