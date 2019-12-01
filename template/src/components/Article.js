import React from 'react'

function Article(props) {
    const {article} = props
    const body = <p>{article.text}</p>

    console.log("-------------", props)

  return(
      <div>
      <h2>{article.title}</h2>
      { body } 
<p>creation date: {article.creationDate}</p>
    </div>
  )
}

export default Article