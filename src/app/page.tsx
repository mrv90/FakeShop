import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/account/register">register</Link>
      <br />
      <Link href="/account/login">login</Link>
      <br />
      <Link href="/account/forgot-password">forgot password</Link>
      <br />
      <Link href="/account/reset-password">reset password</Link>
    </main>
  );
}
