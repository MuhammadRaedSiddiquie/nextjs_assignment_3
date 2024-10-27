'use client'
import React from 'react'
import Style from "./skills.module.css"
import { useState , useEffect,useRef} from 'react';


function Skills() {
  const [count, setCount] = useState(0);
  const [angle, setAngle] = useState(0);
  const spinnerRef=useRef<HTMLDivElement  | null>(null)

  const incrementCount = () => {
    setCount(prevState => prevState + 1);
    setAngle(prevAngle => prevAngle - 45); 
  };
  const discrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    setAngle((prevAngle) => prevAngle + 45);
  };

  useEffect(()=>{
    if(spinnerRef.current!==null){
          spinnerRef.current.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");

    }
  },[spinnerRef,angle])

  return (
    <section className={Style.section} id='skills'>
      <h1>SKILLS</h1>
      <div className={Style.scene}>
        <div ref={spinnerRef} className={Style.carousel} id='carousel'>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 0 ? "shadow" : "noshadow"]}`}>

            <p >  With a strong foundation in Python, I leverage its versatility to build efficient back-end solutions. From scripting and automation to building full-fledged web applications, I use Python`&lsquo;`s extensive libraries and frameworks to create scalable and maintainable code.</p>
    
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 1 ? "shadow" : "noshadow"]}`} >

            <p >  Java has been instrumental in building enterprise-level applications. I bring expertise in using Java for back-end services, Android development, and large-scale systems, with a focus on performance, scalability, and security.</p>

          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 2 ? "shadow" : "noshadow"]}`}>

            <p >  I incorporate TypeScript into my development workflow to ensure robust, type-safe code. By extending JavaScript with static typing, I can catch errors early in the development process, resulting in more reliable and scalable applications.</p>
            
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 3 ? "shadow" : "noshadow"]}`}>

            <p >  Next.js enables me to build lightning-fast, SEO-friendly web applications. I specialize in creating server-side rendered applications and leveraging Next.js powerful static site generation to deliver optimized solutions for users.</p>
    
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 4 ? "shadow" : "noshadow"]}`}>

            <p >  React is my go-to library for building modular and responsive user interfaces. I enjoy creating reusable components and crafting fluid user experiences while ensuring state management and data flow remain efficient and organized.</p>
  
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 5 ? "shadow" : "noshadow"]}`}>

            <p >  JavaScript is the backbone of dynamic web applications, and I excel at using it to create engaging, interactive user experiences. Whether working with vanilla JavaScript or modern frameworks, I focus on performance and user-centric design.</p>
            
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 6 ? "shadow" : "noshadow"]}`}>

            <p >  JavaScript is the backbone of dynamic web applications, and I excel at using it to create engaging, interactive user experiences. Whether working with vanilla JavaScript or modern frameworks, I focus on performance and user-centric design.</p>
          </div>
          <div className={`${Style.carousel__cell} ${Style[count % 8 == 7 ? "shadow" : "noshadow"]}`}>
            <p >  JavaScript is the backbone of dynamic web applications, and I excel at using it to create engaging, interactive user experiences. Whether working with vanilla JavaScript or modern frameworks, I focus on performance and user-centric design.</p>

          </div>

        </div>
      </div>
      <div style={{width:'100%',position: 'absolute'}}>
        <span className={Style.arrows} onClick={discrementCount}>&lt;</span>
        <span className={Style.arrows} onClick={incrementCount}>&gt;</span>
      </div>
    </section>
  )
}

export default Skills
