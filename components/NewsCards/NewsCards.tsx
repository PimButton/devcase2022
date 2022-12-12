import React from 'react'
import Card1 from '../Cards/Card1';
import Card2 from '../Cards/Card2';
import Card4 from '../Cards/Card4';
import Card3 from '../Cards/Card3';
import styles from './NewsCards.module.scss'

type Props = {
    title: string;
    id: number;
    content: NewsContentEntity[];
    created_at: string;
}

const NewsCards = ({title, id, content, created_at}: Props) => {
  return (
    // displaying each News card in order
    <div className={styles.container} key={id}>
      {id === 1 ? 
      <>
      <Card1 title={title} content={content} created_at={created_at}/>
      </>
      : null}
      {id === 2 ? 
      <>
      <Card2 title={title} content={content} created_at={created_at}/>
      </> : null}
      {id === 3 ? 
      <>
      <Card3 title={title} content={content} created_at={created_at}/>
      </> : null}
      {id === 4 ? 
      <>
      <Card4 title={title} content={content} created_at={created_at}/>
      </> : null}
    </div>
  )
}

export default NewsCards