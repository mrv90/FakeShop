import Link from "next/link";

export default function Header() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <br />
            <Link href="/dashboard">dashboard ?</Link>
            <br />
            <Link href="/account/register">register</Link>
            <br />
            <Link href="/account/login">login</Link>
            <br />
            <Link href="/account/send-code">send code</Link>
            <br />
            <Link href="/account/verify-code">verify code</Link>
            <br />
            <Link href="/account/reset-password">reset password</Link>
            <br />
        </nav>)
}