import React, {useState} from 'react'

const Boxes = ({motion}) => {
    
    const [hovered1, setHovered1] = useState("no")
    const [hovered2, setHovered2] = useState("no")
    const [hovered3, setHovered3] = useState("no")
    const [hovered4, setHovered4] = useState("no")
    const [hovered5, setHovered5] = useState("no")
    const [hovered6, setHovered6] = useState("no")
    const [hovered7, setHovered7] = useState("no")
    const [hovered8, setHovered8] = useState("no")

    return (
        <div className="boxes">
      <div id="my-life" className="my-worth">
        
        <div className="left-box" onMouseEnter={() => setHovered1("yes")} onMouseLeave={() => setTimeout(() => setHovered1("no"), 200)}>{ hovered1 === "no" ? null : <><motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="my-pic" src="./IMG_0463.jpg"></motion.img><motion.p className="who-i-am-text">Nathan Hains. A 22 year old with a passion for adapting to, and overcoming challenges. Having moved around as a child, I developed a knack for staying light on my feet. I take pride in conquering both the unknown, and the unmet. A developed sense of social awareness has granted me the ability to become a great collaborator and team member.</motion.p></>}</div>
        <div className= "who-i-am">
        <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="reply" class="svg-inline--fa fa-reply fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 400v31.1C512 440.8 504.8 448 496 448S480 440.8 480 432v-31.1c0-79.41-64.59-143.1-144-143.1H60.2l158.1 131.7c6.781 5.656 7.688 15.75 2.031 22.53C217.1 414 212.6 416 208 416c-3.625 0-7.25-1.219-10.25-3.719l-192-159.1C2.094 249.3 0 244.7 0 239.1c0-4.75 2.094-9.247 5.75-12.28l192-159.1C204.5 62.07 214.6 62.94 220.3 69.75c5.656 6.781 4.75 16.87-2.031 22.53L60.2 224H336C433 224 512 302.1 512 400z"></path></svg></span><h4>Who I am</h4>
        </div>
        <div className= "right-box"  onMouseEnter={() => setHovered2("yes")} onMouseLeave={() => setTimeout(() => setHovered2("no"), 200)}>{ hovered2 === "no" ? null : <><motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="language" src="./react-logo.png"></motion.img><motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="language" src="./ruby-programming-language.png"></motion.img><motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="language" src="./js-logo.png"></motion.img><motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="language" src="./sql.png"></motion.img><motion.p className="what-i-do-text">I'm a Full-Stack Software Engineering Graduate from Flatiron Bootcamp, Student at Farmingdale State College for Computer Programming, and Alumni Suffolk Community Community College! My skills include: Ruby, Rails, React, Redux, Javascript and SQL</motion.p></>}</div>
        <div className= "what-i-do">
        <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="share" class="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M176 224h275.8l-158.1-131.7c-6.781-5.656-7.688-15.75-2.031-22.53c5.688-6.812 15.78-7.687 22.53-2.031l192 159.1C509.9 230.8 512 235.2 512 239.1c0 4.75-2.094 9.253-5.75 12.28l-192 159.1c-3 2.5-6.625 3.719-10.25 3.719c-4.562 0-9.125-1.969-12.28-5.75c-5.656-6.781-4.75-16.87 2.031-22.53l158.1-131.7H176c-79.41 0-144 64.59-144 143.1v31.1C32 440.8 24.84 448 16 448S0 440.8 0 432v-31.1C0 302.1 78.97 224 176 224z"></path></svg></span><h4>What I do</h4>
        </div>
        
      </div>

      <div id="my-work" className="my-work">
        <div className= "left-box-1" onMouseEnter={() => setHovered3("yes")} onMouseLeave={() => setTimeout(() => setHovered3("no"), 200)}>{ hovered3 === "no" ? null : <motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="work-pic" src="./IMG_0533.jpg"></motion.img>}</div>
        <div className= "my-trainer-1">
        <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="reply" class="svg-inline--fa fa-reply fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 400v31.1C512 440.8 504.8 448 496 448S480 440.8 480 432v-31.1c0-79.41-64.59-143.1-144-143.1H60.2l158.1 131.7c6.781 5.656 7.688 15.75 2.031 22.53C217.1 414 212.6 416 208 416c-3.625 0-7.25-1.219-10.25-3.719l-192-159.1C2.094 249.3 0 244.7 0 239.1c0-4.75 2.094-9.247 5.75-12.28l192-159.1C204.5 62.07 214.6 62.94 220.3 69.75c5.656 6.781 4.75 16.87-2.031 22.53L60.2 224H336C433 224 512 302.1 512 400z"></path></svg></span><h4>MyTrainer 1</h4>
        </div>

        <div className= "right-box-1" onMouseEnter={() => setHovered4("yes")} onMouseLeave={() => setTimeout(() => setHovered4("no"), 200)}>{ hovered4 === "no" ? null : <motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="work-pic" src="./IMG_0532.jpg"></motion.img>}</div>
        <div className= "my-trainer-2">
        <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="share" class="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M176 224h275.8l-158.1-131.7c-6.781-5.656-7.688-15.75-2.031-22.53c5.688-6.812 15.78-7.687 22.53-2.031l192 159.1C509.9 230.8 512 235.2 512 239.1c0 4.75-2.094 9.253-5.75 12.28l-192 159.1c-3 2.5-6.625 3.719-10.25 3.719c-4.562 0-9.125-1.969-12.28-5.75c-5.656-6.781-4.75-16.87 2.031-22.53l158.1-131.7H176c-79.41 0-144 64.59-144 143.1v31.1C32 440.8 24.84 448 16 448S0 440.8 0 432v-31.1C0 302.1 78.97 224 176 224z"></path></svg></span><h4>MyTrainer 2</h4>
        </div>

        <div className= "left-box-2" onMouseEnter={() => setHovered5("yes")} onMouseLeave={() => setTimeout(() => setHovered5("no"), 200)}>{ hovered5 === "no" ? null : <motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="work-pic" src="./IMG_0535.jpg"></motion.img>}</div>
        <div className= "allegiance-1">
        <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="reply" class="svg-inline--fa fa-reply fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 400v31.1C512 440.8 504.8 448 496 448S480 440.8 480 432v-31.1c0-79.41-64.59-143.1-144-143.1H60.2l158.1 131.7c6.781 5.656 7.688 15.75 2.031 22.53C217.1 414 212.6 416 208 416c-3.625 0-7.25-1.219-10.25-3.719l-192-159.1C2.094 249.3 0 244.7 0 239.1c0-4.75 2.094-9.247 5.75-12.28l192-159.1C204.5 62.07 214.6 62.94 220.3 69.75c5.656 6.781 4.75 16.87-2.031 22.53L60.2 224H336C433 224 512 302.1 512 400z"></path></svg></span><h4>Allegiance 1</h4>
        </div>

        <div className= "right-box-2" onMouseEnter={() => setHovered6("yes")} onMouseLeave={() => setTimeout(() => setHovered6("no"), 200)}>{ hovered6 === "no" ? null : <motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="work-pic" src="./IMG_0536.jpg"></motion.img>}</div>
        <div className= "allegiance-2">
        <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="share" class="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M176 224h275.8l-158.1-131.7c-6.781-5.656-7.688-15.75-2.031-22.53c5.688-6.812 15.78-7.687 22.53-2.031l192 159.1C509.9 230.8 512 235.2 512 239.1c0 4.75-2.094 9.253-5.75 12.28l-192 159.1c-3 2.5-6.625 3.719-10.25 3.719c-4.562 0-9.125-1.969-12.28-5.75c-5.656-6.781-4.75-16.87 2.031-22.53l158.1-131.7H176c-79.41 0-144 64.59-144 143.1v31.1C32 440.8 24.84 448 16 448S0 440.8 0 432v-31.1C0 302.1 78.97 224 176 224z"></path></svg></span><h4>Allegiance 2</h4>
        </div>

        <div className= "left-box-3" onMouseEnter={() => setHovered7("yes")} onMouseLeave={() => setTimeout(() => setHovered7("no"), 200)}>{ hovered7 === "no" ? null : <motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="work-pic" src="./IMG_0534.jpg"></motion.img>}</div>
        <div className= "iremind-1">
        <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="reply" class="svg-inline--fa fa-reply fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 400v31.1C512 440.8 504.8 448 496 448S480 440.8 480 432v-31.1c0-79.41-64.59-143.1-144-143.1H60.2l158.1 131.7c6.781 5.656 7.688 15.75 2.031 22.53C217.1 414 212.6 416 208 416c-3.625 0-7.25-1.219-10.25-3.719l-192-159.1C2.094 249.3 0 244.7 0 239.1c0-4.75 2.094-9.247 5.75-12.28l192-159.1C204.5 62.07 214.6 62.94 220.3 69.75c5.656 6.781 4.75 16.87-2.031 22.53L60.2 224H336C433 224 512 302.1 512 400z"></path></svg></span><h4>iRemind 1</h4>
        </div>

        <div className= "right-box-3" onMouseEnter={() => setHovered8("yes")} onMouseLeave={() => setTimeout(() => setHovered8("no"), 200)}>{ hovered8 === "no" ? null : <motion.img initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0}} className="work-pic" src="./IMG_0537.jpg"></motion.img>}</div>
        <div className= "iremind-2">
        <span><svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="share" class="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M176 224h275.8l-158.1-131.7c-6.781-5.656-7.688-15.75-2.031-22.53c5.688-6.812 15.78-7.687 22.53-2.031l192 159.1C509.9 230.8 512 235.2 512 239.1c0 4.75-2.094 9.253-5.75 12.28l-192 159.1c-3 2.5-6.625 3.719-10.25 3.719c-4.562 0-9.125-1.969-12.28-5.75c-5.656-6.781-4.75-16.87 2.031-22.53l158.1-131.7H176c-79.41 0-144 64.59-144 143.1v31.1C32 440.8 24.84 448 16 448S0 440.8 0 432v-31.1C0 302.1 78.97 224 176 224z"></path></svg></span><h4>iRemind 2</h4>
        </div>
      </div>
      </div>
    )
}

export default Boxes