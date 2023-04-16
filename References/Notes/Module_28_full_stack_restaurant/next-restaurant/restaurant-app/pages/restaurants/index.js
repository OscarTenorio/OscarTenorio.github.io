import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/Link';

const inter = Inter({ subsets: ['latin'] })

export default function RestaurantsHome() {
  //hardcoded restaurants list for now, will go fetch them from database eventually
  const restaurants = [
    {name:"WoodsHill"},
    {name:"Fiorellas"},
    {name:"Karma"}
  ];

  return (
    <div>
      <h1>Restaurants Home Page!!</h1>
      <h2>Restaurants List:</h2>
      {restaurants.map( restaurant => { //notice it's in curly braces, since it needs to be evaluated
        return <div>
          <Link as={"/restaurants/"+ restaurant.name} href="restaurants/[restaurant]">
            {restaurant.name}
          </Link>
        </div>
      })}
    </div>
  )
}
