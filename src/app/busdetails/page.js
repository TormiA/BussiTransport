"use client"
import React from 'react';
import BusInfoCard from '@/components/BusInfoCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Layout/header';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';

export default function BusDetails()  {





  return (
    <Container>
      <Header />
      <h1>Bussid</h1>
        <BusInfoCard/>    
    </Container>
  );
};
