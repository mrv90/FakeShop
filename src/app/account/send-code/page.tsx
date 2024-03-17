import styles from './FogotPassword.module.css'

export default function SendCode() {
    return (
        <div className={styles.container}>
            <form action="">
                <input name="email" type="email" placeholder="Enter your email" />
                <button type="submit">Send Code</button>
            </form>

            {/* <div class="toast" id="verifyToast">Invalid verification code</div> */}
        </div>
    )
}