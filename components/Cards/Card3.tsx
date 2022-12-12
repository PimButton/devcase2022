// Components==============
import React, { useState } from 'react'
import styles from './CardDetails.module.scss'
// ========================

type Props = {
    title: string;
    content: NewsContentEntity[]
    created_at: string;
}

const Card3 = ({content, title, created_at}: Props) => {
    // useState hook to set state of Modal
const [open, setIsOpen] = useState(false)
    
  return (
    <>
        {/* Displaying card title and date */}
        <div className={styles.card3}>
            <h1 className={styles.title}>{title}</h1>
                <p className={styles.date}>{created_at}</p>
        {/* Mapping through content array */}
        {content?.map(({layout, content}) => (
            <>
            {/* Turn operator to check if layout is marked as image or text, diplaying content of each as they are both marked 'content' in array */}
            {layout === 'image' ? <img className={styles.image} src={content}/> : layout === 'text' ? <p className={styles.text}>{content}</p> : null}
            </>
        ))}
        </div>
            {/* Read More... button, with onClick function that sets Modal state to true */}
            <button onClick={() => setIsOpen(true)} className={styles.button}>Lees verder...</button>
            {/* Operator to check if Modal state is true, if true, displays Modal */}
            {open && 
            // onClick placed in div surrounding Modal when clicked Modal is set to falst, closing Modal
            <div className={styles.darkBG} onClick={() => setIsOpen(false)}>
                <div className={styles.centered}>
                    <div className={styles.modal}>
                        <h1 className={styles.title}>{title}</h1>
                            <p className={styles.date}>{created_at}</p>
                                {/* Mapping through content array */}
                                {content?.map(({layout, content}) => (
                                <>
                                    {/* Turn operator to check if layout is marked as image or text, diplaying content of each as they are both marked 'content' in array */}
                                    {layout === 'image' ? <img className={styles.image} src={content}/> : 
                                    layout === 'text' ? <p className={styles.text}>{content}</p> : null}
                                </>
                                ))}
                    </div>
                </div>
            </div>
            }
    </>
  )
}

export default Card3