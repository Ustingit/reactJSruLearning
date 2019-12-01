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
    const body = this.state.isOpen && <section className="card=text">{article.text}</section>;

    return(
      <div className="card mx-auto" style={{ width: '50%' }}>
        <div className="card-header">
            <h2>{article.title}</h2>
          <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">close</button>
        </div>
      <div className="card-body">
        <h6 className="card=subtitle text=muted">
           <p>creation date: {(new Date(article.date)).toDateString()}</p>
        </h6>
         { body } 
      </div>
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