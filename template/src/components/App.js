import Article from './Article'
import React from 'react'
import articles from '../fixtures'
import ArticlesList from './ArticleList'

function App() {
    return(
        <div>
              <h1>APP</h1><br />
            <ArticlesList articles={articles} />
      </div>
    )
  }

export default App