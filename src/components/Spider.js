import React from 'react'
import '../spider.css'
const Spider = ({clicked}) => {

    return clicked ==="no" ? null : (
            <>
                <div class="spider-web shadow"></div>
            <div class="container shadow">
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
            <div class="spider-body shadow-body">
                <div class="eye eye-left"></div>
                <div class="eye eye-right"></div>
            </div>
            </div>

            <div class="spider-web"></div>
            <div class="container">
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