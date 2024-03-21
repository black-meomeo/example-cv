import React from "react"
import styles from "./style"
import {Navbar,Myprofile,Project,Footer} from "./components"
import './fontawesome'

const App = () =>{
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} z-10`}>
          <Navbar/>
        </div>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Myprofile/>
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`} id="projects">
          <Project/>
          <Footer />
        </div>
      </div>

    </div>


  )
}
export default App
