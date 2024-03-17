import styles from './VerifyCode.module.css'

export default function VerifyCode() {
    return (
        <div className={styles.container}>
            <form action="reset_password.html">
                <input name='code' type="text" placeholder="Enter verification code" />
                <button type="submit">Submit Code</button>
            </form>

            {/* <div class="toast" id="verifyToast">Invalid verification code</div> */}
        </div>
    )
}