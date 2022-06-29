import React from 'react'

export default function DecreamentButton({decrement}) {
  return (
    <div>
        <button onClick={decrement} className="btn btn-danger">-</button>
    </div>
  )
}
