import React from 'react'
import {motion} from 'framer-motion'
import Spider from './Spider'
const Lightbulb = ({clicked, handleClick, spiderClicked, setSpiderClicked}) => {

    return (
        <>
            {clicked === "no" ? null :
            <>
            <motion.div initial={{opacity: 0, y:-200}} transition= {{type: "spring", damping: 6}}animate={{opacity: 1, y:0}} class={clicked === "no" ? "area" : "area area-on-2"}>
                <div class="wire-2"></div>
                <div class="fixture">
                    <div class="strip"></div>
                    <div class="strip"></div>
                    <div class="strip"></div>
                </div>
                <div onClick = {handleClick} class={clicked === "no" ? "bulb-off" : "bulb-off bulb-on"}>
                    <div class="zig"></div>
                    <div class="zig"></div>
                    <div class="zig"></div>
                </div>
                <div onClick = {handleClick} class={clicked === "no" ? "bulb-off-second" : "bulb-off-second bulb-on-second"}></div>
            </motion.div>

            <motion.div initial={{opacity: 0, y:-200}} transition= {{type: "spring", damping: 6}}animate={{opacity: 1, y:0}} class={clicked === "no" ? "area" : "area area-on-3"}>
                <div class="wire-2"></div>
                <div class="fixture">
                    <div class="strip"></div>
                    <div class="strip"></div>
                    <div class="strip"></div>
                </div>
                <div onClick = {handleClick} class={clicked === "no" ? "bulb-off" : "bulb-off bulb-on"}>
                    <div class="zig"></div>
                    <div class="zig"></div>
                    <div class="zig"></div>
                </div>
                <div onClick = {handleClick} class={clicked === "no" ? "bulb-off-second" : "bulb-off-second bulb-on-second"}></div>
            </motion.div>
            </>
            }
             <motion.div initial={{opacity: 0, y:-200}} transition= {{type: "spring", damping: 6}}animate={{opacity: 1, y:0}} class={clicked === "no" ? "area" : "area area-on"}>
                <div class="wire"></div>
                <div class="fixture">
                    <div class="strip"></div>
                    <div class="strip"></div>
                    <div class="strip"></div>
                </div>
                <div onClick = {handleClick} class={clicked === "no" ? "bulb-off" : "bulb-off bulb-on"}>
                    
                    <div class="zig"></div>
                    <div class="zig"></div>
                    <div class="zig"></div>
                </div>
                <div  class={clicked === "no" ? "bulb-off-second" : "bulb-off-second bulb-on-second"}><div className="spider-box">
                    <Spider clicked={clicked} spiderClicked={spiderClicked} setSpiderClicked={setSpiderClicked}/>
                </div></div>
            </motion.div>
        </>
    )
}

export default Lightbulb