import React from 'react'
import classes from './Button1.module.css'

const Button1 = function ({ children, ...props }) {
    return (
        <button { ...props } className={ classes.button }>
            { children }
        </button>
    )
}

export default Button1;

























