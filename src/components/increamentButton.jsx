import React from 'react'

export default function IncreamentButton({increament}) {
  return (
    <div>
        <button onClick={increament} className="btn btn-primary">+</button>
    </div>
  )
}
