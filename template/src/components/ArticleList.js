import React from 'react';
import Article from './Article';

export default function ArticlesList({ articles }){
    const articleElements = articles.map(element => 
        <li key={element.id}><Article article={element} /></li>
    );

    return(
        <ul className="list-unstyled">
            {articleElements}}
        </ul>
    )
}