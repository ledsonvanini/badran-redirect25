
import styles from './Logo.module.css'
import logo from "/public/logo-badran-min.png"

function LogoBadran() {
  return (
    <div className={styles.logo}>
        <a href="#">
        < img style={{ width: '100%',}} src={logo} alt="Logo Grupo Badran" />
    </a>
    </div>
  )
}

export default LogoBadran