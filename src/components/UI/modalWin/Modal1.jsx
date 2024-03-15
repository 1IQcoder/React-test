import React from 'react'
import classes from './Modal1.module.css'

export default function Modal1({ children, visible, setVisible }) {
    
    const rootClasses = [classes.Modal]
    if (visible) {
        rootClasses.push(classes.active)
    }

  return (
    <div className={rootClasses.join(' ')} onClick={(e) => setVisible(false)} >
        <div className={classes.ModalContent} onClick={(e) => e.stopPropagation()} >
            {
                children
            }
        </div>
    </div>
  )
}












