// Components==============
import React, { useState } from 'react'
import styles from './CardDetails.module.scss'
// ========================

type Props = {
    title: string;
    content: NewsContentEntity[]
    created_at: string;
}

const Card4 = ({content, title, created_at}: Props) => {
    // useState hook to set state of Modal
    const [open, setIsOpen] = useState(false)
  return (
    <>
    {/* Displaying title and date */}
    <div className={styles.card4}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{created_at}</p>
      {/* Mapping through content array */}
      {content?.map(({content}) => (
        <>
          <p className={styles.textTruncate}>{content}</p>
        </>
      ))}
        {/* Read More... button, with onClick function that sets Modal state to true */}
        </div>
        <button onClick={() => setIsOpen(true)} className={styles.button}>Lees verder...</button>
        {/* Operator to check if Modal state is true, if true, displays Modal */}
        {open && 
        // onClick placed in div surrounding Modal when clicked Modal is set to falst, closing Modal
        <div onClick={() => setIsOpen(false)} className={styles.darkBG}>
            <div className={styles.centered}>
                <div className={styles.modal}>
                    {/* Displaying title and date */}
                    <h1 className={styles.title}>{title}</h1>
                        <p className={styles.date}>{created_at}</p>
                            {/* Mapping through content array */}
                            {content?.map(({content}) => (
                            <>
                                <p className={styles.text}>{content}</p>
                            </>  
                            ))}
                </div>
            </div>
        </div>
        }
         
    </>
  )
}

export default Card4