import React, {Component} from 'react'

class Article extends Component {
  constructor(props) {
      super(props);

      this.state = {
        isOpen: props.defaultOpen
      }

      this.buttonText = {
        true: "close",
        false: "open"
      };

      /* 
      state = {
        isOpen = true
      }
      */
  }

  componentWillMount() {
    console.log('---- mounted');
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
        isOpen: nextProps.defaultOpen
      })
  }

  render(){
    const {article} = this.props;
    const body = this.state.isOpen && <section className="card=text">{article.text}</section>;

    return(
      <div className="card mx-auto" style={{ width: '50%' }}>
        <div className="card-header">
            <h2>{article.title}</h2>
          <button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">{this.state.isOpen ? 'close' : 'open'}</button>
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