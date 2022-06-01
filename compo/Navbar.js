import Link from 'next/link'

export default function Navbar() {
  return (
    <>
    <ul>
        <li> <Link href="/">Home</Link> </li>
        <li> <Link href="/About">about</Link> </li>
        <li> <Link href="/Profile">Profile</Link> </li>
        <li> <Link href="/Login">Login</Link> </li>

    </ul>
    </>
  )
}
