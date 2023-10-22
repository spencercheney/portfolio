import styles from "../styles/header.module.css"

export default function Header(headerLocation) {

  return (
    <div className={styles.header}>
      <div className={styles.icon}></div>
      <div className={styles.name}>Spencer Cheney</div>
    </div>
  )
}