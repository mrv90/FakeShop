import styles from './ResetPassword.module.css'

export default function ResetPassword() {
    return (<div className={styles.container}>
        <form action="">
            <input type="password" placeholder="Enter new password" />
            <input type="confirm-password" placeholder="Confirm new password" />
            <button type="submit">Reset Password</button>
        </form>
    </div>)
}