'use client';
import React from 'react';
import { Section } from './ServiceSection';
import styled from 'styled-components';
import Link from 'next/link';
import { useFetchHomeSpecialitiesHeader, useFetchSpecialities } from '@/lib/data';

export const ServiceBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  padding: 25px;
  color: white;

  .left {
    margin-left: 45px;

    @media screen and (max-width: 618px) {
      margin-left: 1px;
    }
  }
  .right {
    display: flex;
    gap: 5px;

    img {
      width: 20px;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;

  h1 {
    font-size: 5rem;

    @media screen and (max-width: 941px) {
      font-size: 3rem;
    }
    @media screen and (max-width: 364px) {
      font-size: 2.5rem;
    }
  }

  p {
    width: 40%;
  }

  @media screen and (max-width: 1010px) {
    flex-direction: column;
    padding: 15px;

    p {
      width: 100%;
      text-align: center;
    }
  }
`;

export const ImageDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;


  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .text-overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    padding: 10px;
    border-radius: 5px;
    width: 50%;
    font-size: 1.5rem;
  }

  .top-right-arrow {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.1);
    }
  }
`;


function OurSpecialities() {

  const { specialitiesHeader, isLoading, error } = useFetchHomeSpecialitiesHeader();
  const { specialities, isLoading: isLoading0, error: error0 } = useFetchSpecialities();

  const SpecialityimagesSub = [
    { src: '/spec-1.svg', title: 'Bone Conduction Devices' },
    { src: '/spec-2.svg', title: 'Phono Microsurgery' },
    { src: '/spec-3.svg', title: 'Acoustic Neuroma Surgery' },
    { src: '/spec-1.svg', title: 'Phono Microsurgery' },
    { src: '/spec-3.svg', title: 'Acoustic Neuroma Surgery' },
    { src: '/spec-2.svg', title: 'Phono Microsurgery' },
  ];

  const Specialityimages = specialities || SpecialityimagesSub;


  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }

  
  if (error0) {
    console.log(`Error loading data: ${error0.message}`);
  }
  return (
    <Section>
      <ServiceBtn>
        <div className="left">Our Specialities</div>
        <div className="right">
        <Link href={'/pages/specialities'}className='text-white'>
           Explore More
           </Link>
          <img src="/button-right-arrow.svg" alt="icon" />
        </div>
      </ServiceBtn>

      <MainContent>
        {/* <h1>We Specialities</h1>
        <p>
          Through our 25+ specialities, we provide in-depth expertise in the spectrum of
          advanced medical and surgical interventions. Our specialities are integrated to
          provide a seamless experience.
        </p> */}
        <h1>{specialitiesHeader?.title}</h1>
        <p>
          {specialitiesHeader?.description}
        </p>
      </MainContent>

      <ImageDiv>
        {Specialityimages.map((specialities, index) => (
          <ImageCard key={index}>
            <img src={specialities?.src} alt={specialities?.title} />
            <div className="text-overlay">{specialities?.title}</div>
            <div className="top-right-arrow">
              <img src="/spec-arrow.svg" alt="arrow" />
            </div>
          </ImageCard>
        ))}
      </ImageDiv>
    </Section>
  );
}

export default OurSpecialities;
