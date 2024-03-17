import Link from 'next/link'
import styles from './Login.module.css'

export default function Login() {
    return (
        <main className={styles.container}>
            <form action="">
                <input name="username_or_email" type="text" placeholder="Username or Email" />
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <div className={styles.links}>
                <Link href="/account/register">Create an account</Link>
                <Link href="/account/send-code">Forgot password</Link>
            </div>
            <div className={styles.toast} id="loginToast">Invalid username or password</div>
        </main>
    )
}