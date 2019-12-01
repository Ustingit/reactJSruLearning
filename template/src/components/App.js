import Article from './Article'
import React from 'react'
import articles from '../fixtures'

function App() {
    return(
        <div>
              <h1>APP</h1><br />
            <Article article={articles[0]} flag foo="bar" />
      </div>
    )
  }

export default App