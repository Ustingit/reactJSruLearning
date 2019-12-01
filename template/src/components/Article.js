import React from 'react'

function Article() {
    const body = <p>Azaz</p>

  return(
      <div className="hello" style={{color: 'red'}}>
      <h2>Title</h2>
      { body } 
  <p>creation date: {(new Date()).toDateString()}</p>
    </div>
  )
}

export default Article