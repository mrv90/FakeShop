import Link from 'next/link'
import styles from './Register.module.css'

export default function Register() {
    return (<div className={styles.container}>
        <form action="">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button type="submit">Register</button>
        </form>
        <div className={styles.links}>
            <span>Already have an account?</span>
            <Link href="/account/login">Login</Link>
        </div>
    </div>)
}