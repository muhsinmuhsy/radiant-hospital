'use client';
import React from 'react'
import styled from 'styled-components'
import ServiceCarousal from './ServiceCarousal';
import Link from 'next/link';
import { useFetchHomeServiceHeader } from '@/lib/data';




export const Section = styled.div`
    background-image: url('/service-bg.png');
    background-repeat: no-repeat;
    background-size: cover; /* Ensures the background image covers the entire section */
    background-position: center; /* Center the image */
    width: 100%;
    height: fit-content;
    align-items: center;
    margin-top: 20px;
    max-width: 1536px;
 margin: auto;
 margin-bottom: 35px;
 margin-top: 35px;



`

export const ServiceBtn = styled.div`
display: flex;
align-items: center;
gap: 10px;
justify-content: space-between;
padding: 25px;
color: white;

.left{
  margin-left: 45px;

  @media screen and (max-width:618px) {
    margin-left: 1px;
    
  }
}


.right{
  display: flex;
  gap: 5px;

  img{
    width: 20px;
  }
}
    
`

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;


  h1{
    font-size: 5rem;

    @media screen and (max-width: 941px) {

      font-size: 4rem;
      
    }
    @media screen and (max-width: 364px) {
font-size: 3rem;
    }

    
  }
  


  p{
    width: 50%;
  }


  @media screen and (max-width: 1010px) {

flex-direction: column;
padding: 15px;

p{
  width: 100%;
  text-align: center;
}

}
`

function  ServiceSection() {

  const { serviceHeader, isLoading, error } = useFetchHomeServiceHeader();

  return (
    <Section >
      <ServiceBtn>
        <div className="left">Our Services</div>
        <div className="right">
         <button >
           <Link href={'/pages/service'}className='text-white'>
           Explore More
           </Link>
         </button>
         <img src="/button-right-arrow.svg" alt="icon"></img>
          
          </div>
      </ServiceBtn>

      <MainContent>
        <h1>{serviceHeader?.title}</h1>
        <p>{serviceHeader?.description}</p>
      </MainContent>
      <ServiceCarousal/>

    </Section>
  )
}

export default ServiceSection