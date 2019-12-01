import React from 'react'
import articles from '../fixtures'
import ArticlesList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return(
        <div className="container">
          <div className="jumbotron">
          <h1 className="display-3">My first react app</h1>
          </div>
            <ArticlesList articles={articles} />
      </div>
    )
  }

export default App