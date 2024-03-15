import styles from './FogotPassword.module.css'

export default function ForgotPassword() {
    return (<div className={styles.container}>
        <form action="">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Send Code</button>
        </form>
    </div>)
}