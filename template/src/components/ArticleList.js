import React from 'react';
import Article from './Article';

export default function ArticlesList({ articles }){
    const articleElements = articles.map((element, index) => 
        <li key={element.id}><Article article={element} defaultOpen = {index === 0} /></li>
    );

    return(
        <ul className="list-unstyled">
            {articleElements}}
        </ul>
    )
}