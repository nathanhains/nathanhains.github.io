import React, {useState} from 'react'
import '../spider.css'
const Spider = ({clicked, spiderClicked, setSpiderClicked}) => {



    return clicked ==="no" ? null : spiderClicked === "no" ? (
        
            <>
            
            <div class="spider-web"></div>
            <div class="container" onClick={() => {
                setSpiderClicked("yes")
                setTimeout(() => setSpiderClicked("hide"), 5000)
            }}>
            <div class="arm-container right">
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
            </div>
            <div class="arm-container left">
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
            </div>
            <div class="spider-body">
                <div class="eye eye-left"></div>
                <div class="eye eye-right"></div>
            </div>
            </div> 
            </>  
        )
        :

        spiderClicked === "hide" ? null : (
            <>
            <div class="spider-web-2"></div>
            <div class="container-2" onClick={() => {
                setSpiderClicked("yes") 
                setTimeout(setSpiderClicked("hide"), 6000)
                }}>
            <div class="arm-container right">
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
            </div>
            <div class="arm-container left">
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
                <div class="arm A"><div class="arm B"><div class="arm C"></div></div></div>
            </div>
            <div class="spider-body">
                <div class="eye eye-left"></div>
                <div class="eye eye-right"></div>
            </div>
            </div> 
            </>  
        )

    
}

export default Spider