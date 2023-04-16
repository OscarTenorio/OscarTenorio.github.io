import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {Router, useRouter} from 'next/router';

export default function Restaurant() {
  const router = useRouter();
  return (
    <>
    <h1>Dynamic Restaurant Page!!</h1>
    <h3>Dynamic URL Value: {router.query.restaurant}</h3>
    <br></br>
    <p>because the file name has [], like [restaurant].js, this allows the URL to contain any value after "/restaurants/..." and it would load this page</p>
    </>
  )
}
