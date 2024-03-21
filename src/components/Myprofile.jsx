import React from "react";
import styles from '../style'
import {yellow,people1} from '../assets'
import Button from "./Button";



const Myprofile = () => (
   <section id="" className={`${styles.paddingY} flex md:flex-row flex-col relative top-[-142px] left-[30px] `}>
        <div className={`${styles.flexStart} flex flex-1 flex-col px-6 max-w-[486px] `}>
            <span className="text-yellow-300 font-comfortaa font-[900] text-[20px]">UX/UI DESIGNER</span>
            <h1 className="font-playfair font-bold text-[64px] leading-[80px] ">Hello, my name <br/> is Hieu Tran</h1>
            <p className="max-w-[486px] text-[22px] mt-3 text-gray-500 leading-[40px]">Short text with details about you, what you do or your professional career. 
                You can add more information on the about page.</p>
            <div>
                <Button name='Project' style=' rounded-lg text-white bg-amber-400 border-0 mt-10 mr-5'/> 
                <Button name='Linkin' style=' rounded-lg text-black border-[1px] border-black ' />
            </div>    

        </div>
        
        <div className={`${styles.flexCenter} flex flex-1 relative right-[-50px] `}>
            <div className={`bg-yellow w-[720px] h-[629px] bg-cover bg-center bg-no-repeat`}>
                <div className="">
                    <img src={people1} className="mask1"  />
                </div>
            </div>
        </div>
   </section>
)


export default Myprofile