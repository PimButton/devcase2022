// Components==============
import React from 'react'
import styles from './CardDetails.module.scss'
// ========================

type Props = {
    title: string;
    content: NewsContentEntity[]
    created_at: string;
}

const Card1 = ({content, title, created_at}: Props) => {
  return (
    <>
    {/* Displaying title and data */}
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{created_at}</p>
      {/* Mapping through content array */}
      {content?.map(({layout, content}) => (
        <>
          {/* Turn operator to check if layout is marked as image or text, diplaying content of each as they are both marked 'content' in array */}
          {layout === 'image' ? <img className={styles.image} src={content}/> : layout === 'text' ? <p className={styles.text}>{content}</p> : null}
        </>
      ))}
    </>
  )
}

export default Card1