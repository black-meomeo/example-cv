import React from "react"

const Button = ({style,name}) =>{ return(
    <button type="button" className={`px-6 py-2 font-comfortaa font-normal text-[18px] outline-none ${style}`}>
        {name}
    </button>
)
}

export default Button