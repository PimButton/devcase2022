import styles from "./Card.module.scss"



const Card = (props) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.cardTitle}>{props.title}</h1>
            <p className={styles.cardDate}>{props.date}</p>
            <img className={styles.cardImage} src={props.image} alt="" />
            <img src={props.secondImage} alt="" />
            <p>{props.firstSection}</p>
            <img src={props.thirdImage} alt="" />
            
            <p>{props.secondSection}</p>
            <p>{props.thirdSection}</p>
        </div>
        

    )
}

export default Card

