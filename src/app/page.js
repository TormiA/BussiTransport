import BusSearch from '@/components/BusSearch';
import Header from '@/components/Layout/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


export default function Home() {
  return (
    <div>
      <Header />  
      <BusSearch />
    </div>
  )
}
