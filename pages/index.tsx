// Components==============
import React, { useState, useEffect } from "react"
import Container from "../components/Container/Container"
import Card from '../components/Card/Card'
import { useMediaQ } from "../components/useMediaQ"
import styles from "../styles/Home.module.scss"
import axios from "axios"
import Modal from "../components/Modal/Modal"

export default function Home() {
  const [data, setData] = useState<NewsEntity[]>([])

  const [openModal, setIsModalOpen] = useState(false)

useEffect(() => {
  const path = "http://localhost:3000/api/news"
  axios.get(path)
    .then(response => {
      setData(response.data)
      console.log(data);
      
    })

    const closeModal = e => {
      console.log(e);
      if(e.path[0].tagName !== 'BUTTON') {
        setIsModalOpen(false)
      }
    }

    document.body.addEventListener('click', closeModal)
    return () =>  document.body.removeEventListener('click', setIsModalOpen)
},[])

const information = data.map((item, index) => {
  let text1 = ''
  let text2 = ''
  let text0 = ''
  let image1 = ''
  let image2 = ''
  let image3 = ''
  const content = item.content
  
  const initalDate = item.created_at.split(' ')
  const reverseDate = initalDate[0].split('-').reverse().join('-')
  const adjustedTime = initalDate[1].slice(0, -3)
  const formattedDate = [reverseDate, adjustedTime].join(' - ')
  
  const secondLevelInformation = item.content.map((item, index) => {
    const layout = item.layout
    const contenttt = item.content
    
    
    if(layout === 'text') {
      text0 = content[index].content
      
    } else if (layout === 'image') {
      image1 = content[0].content
      image2 = content[1]?.content
      image3 = content[2]?.content
    }
  })
  
    return (
      <Container key={index}>
          <div className={styles.wrapper}>
            <Card 
              title={item.title}

              date={formattedDate}

              image={image1}

              secondImage={image2}

              firstSection={text0}

              thirdImage={image3}

            />
            <button className={styles.readMoreButton} onClick={() => {setIsModalOpen(prev => !prev)}}>Lees verder...</button>
            {openModal && 
            <Modal 
                title={item.title}
                date={formattedDate}
                description={text0}/>}
            
          </div>
        </Container>
    )
  })
  
    return (
      <div>
        {information}
      </div>
    )
  
}
