// Login page commented out - website now directly accessible
// import LoginClient from './LoginClient'

// export const metadata = {
//   title: 'Login - PGC Jhang',
//   description: 'Login to access PGC Jhang website',
// }

// export default function Login() {
//   return <LoginClient />
// }

// Temporary redirect to home page
import { redirect } from 'next/navigation'

export default function Login() {
  redirect('/')
}
