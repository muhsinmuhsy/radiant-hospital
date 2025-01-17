'use client';
import React from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import { useFetchHomeAboutHero } from '@/lib/data';

const AboutSectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  max-width: 1200px;
  margin: auto;
  gap: 20px;
  margin-top: 15px;


  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

const AboutContent = styled.div`
  flex: 1;
  min-width: 300px;

  h1 {
    font-size: 3rem;
    margin-bottom: 15px;
    color: #2D3A3A;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #555;
  }

  button {
    background-color: #11B3B8;
    color: white;
    border: none;
    padding: 10px 45px;
    font-size: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #5ea8d0;
    }
  }

  @media (max-width: 1064px) {
   h1{
    font-size: 2.5rem;
   } 
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 0.9rem;
    }

    button {
      font-size: 1rem;
      padding: 10px 30px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.7rem;
    }

    p {
      font-size: 0.85rem;
    }

    button {
      font-size: 1rem;
      padding: 10px 30px;
    }
  }
`;

const AboutImage = styled.div`
  flex: 1;
  min-width: 300px;
  text-align: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
  }
`;



function AboutHero() {
  const { aboutHero, isLoading, error } = useFetchHomeAboutHero();

  
  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }
  
  return (
    
    <AboutSectionWrapper>
    <AboutContent>
    {/* <h1>
        We Provide affordable,  accessible and quality healthcare for all
      </h1>
      <p>
        Radient Ent Hospital has always been in the forefront to introduce the most
        advanced and sophisticated treatment options in various specialities and
        subspecialities, most of them are at par with the international standards.
        We Provide affordable, accessible and quality healthcare for all.
      </p> */}
      <h1>
        {aboutHero?.title || "We Provide affordable,  accessible and quality healthcare for all"}
      </h1>
      <p>
        {aboutHero?.description || "Radient Ent Hospital has always been in the forefront to introduce the most advanced and sophisticated treatment options in various specialities and subspecialities, most of them are at par with the international standards. We Provide affordable, accessible and quality healthcare for all."}
      </p>
      <button>Read More</button>
    </AboutContent>
    <AboutImage>
      <Image
        src="/doc-property.png"
        alt="Healthcare Image"
        width={500}
        height={300}
      />
    </AboutImage>
  </AboutSectionWrapper>
   
      );
    }
    


export default AboutHero