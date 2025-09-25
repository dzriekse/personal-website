import React, { useEffect, useState } from 'react'
import * as styles from './typingtext.css'

const TypingText = ({ text }) => {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {

    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => text.substring(0, i+1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 50) // typing speed
  }, [])

  return <span className={styles.TypingText}>{displayed}<span className="cursor">|</span></span>
}

export default TypingText