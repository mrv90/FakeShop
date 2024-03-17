import Link from 'next/link'
import styles from './Register.module.css'

export default function Register() {
    return (
        <div className={styles.container}>
            <form action="">
                <input name="username" type="text" placeholder="Username" />
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <input name="confirm-password" type="password" placeholder="Confirm Password" />
                <button type="submit">Register</button>
            </form>
            <div className={styles.links}>
                <span>Already have an account?</span>
                <Link href="/account/login">Login</Link>
            </div>
        </div>
    )
}