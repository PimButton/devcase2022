import styles from "./Modal.module.scss"

const Modal = (props) => {
    return (
        <div className={styles.modalBackround}>
            <div className={styles.modalContainer}>
                <h1>{props.title}</h1>
                <p className={styles.cardDate}>{props.date}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Modal