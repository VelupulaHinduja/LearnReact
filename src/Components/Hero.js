import React from 'react'

function Hero({heroName}) {
    if(heroName === "Joker"){
        throw new Error("No joker only hero")
    }
  return (
    <div>{heroName}</div>
  )
}

export default Hero