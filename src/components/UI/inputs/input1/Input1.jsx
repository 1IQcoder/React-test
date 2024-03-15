import React from 'react'
import classes from './Input1.module.css'

const Input1 = React.forwardRef(({ ...props }, ref) => {
    return (
        <input ref={ref} {...props} className={classes.input} />
    )
})

export default Input1;











