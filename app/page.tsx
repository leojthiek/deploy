import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
   <h1>hello this is my next application , come on</h1>
   <Link href={'/pages/testing'}>
   <button>testing</button>
   </Link>
    </div>
  )
}
