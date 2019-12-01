import React, {Component} from 'react'

class Article extends Component {
  constructor(props) {
      super(props);

      this.state = {
        isOpen: true
      }

      /* 
      state = {
        isOpen = true
      }
      */
  }

  render(){
    const {article} = this.props;
    const body = this.state.isOpen && <p>{article.text}</p>;

    return(
      <div>
      <h2>{article.title}</h2>
      <button onClick={this.handleClick}>close</button>
      { body } 
          <p>creation date: {article.creationDate}</p>
    </div>
    )
  }

  handleClick = () => {
    console.log('clicked');
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

}


export default Article