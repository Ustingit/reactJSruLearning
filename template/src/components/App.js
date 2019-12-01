import React, {Component} from 'react'
import articles from '../fixtures'
import ArticlesList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'
import { tsConstructorType } from '@babel/types'

class App extends Component {
    state = {
      reverted: false
    }

    render() {
      return(
        <div className="container">
          <div className="jumbotron">
          <h1 className="display-3">My first react app</h1>
          <button className="btn" onClick={this.revert}>Revert</button>
          </div>
            <ArticlesList articles={this.state.reverted ? articles.reverse() : articles} />
      </div>
    )
    }

    revert = () => this.setState({
        reverted: !this.state.reverted
    });
  }

export default App