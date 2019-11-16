import React, { useContext } from 'react'
import FunctionalContext from '../../context/functional/functionalContext';


const functionalComponent = () => {
  const functionalContext = useContext(FunctionalContext);
  
  return (
    <div>
      <h1>Classes</h1>
      <h2>Classes</h2>
      <p><code>{`
              import React from 'react'

        constructor() {
          super()
      `}
      </code>

          </p>

    </div>
  )
}

export default functionalComponent
