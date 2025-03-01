'use client';
import React from 'react';
import { Section } from './ServiceSection';
import styled from 'styled-components';
import Link from 'next/link';
import { useFetchHomeSpecialitiesHeader, useFetchSpecialities } from '@/lib/data';
import Image from 'next/image';

// Styled Components
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
 

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .image-container {
    position: relative;
    width: 100%;
    height: 350px;
    filter: brightness(80%);
   
  }

  .text-overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    padding: 10px;
    border-radius: 5px;
    width: 45%;
    font-size: 1.4rem;
   
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
`;

function OurSpecialities() {
  const { specialitiesHeader, isLoading, error } = useFetchHomeSpecialitiesHeader();
  const { specialities, isLoading: isLoading0, error: error0 } = useFetchSpecialities();

  const limitedSpecialities = specialities ? specialities.slice(0, 6) : [];

  // const SpecialityimagesSub = [
  //   { src: '/spec-1.svg', title: 'Bone Conduction Devices' },
  //   { src: '/spec-2.svg', title: 'Phono Microsurgery' },
  //   { src: '/spec-3.svg', title: 'Acoustic Neuroma Surgery' },
  //   { src: '/spec-1.svg', title: 'Phono Microsurgery' },
  //   { src: '/spec-3.svg', title: 'Acoustic Neuroma Surgery' },
  //   { src: '/spec-2.svg', title: 'Phono Microsurgery' },
  // ];

  const Specialityimages = specialities;


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
          <Link href={'/pages/specialities'} className='text-white'>
            Explore More
          </Link>
          <img src="/button-right-arrow.svg" alt="icon" />
        </div>
      </ServiceBtn>

      <MainContent>
        <h1>{specialitiesHeader?.title}</h1>
        <p>{specialitiesHeader?.description}</p>
      </MainContent>

      <ImageDiv>
        {specialities?.map((speciality) => (
          <Link href={`/pages/specialities/${speciality?.id}`} key={speciality?.id}>
            <ImageCard>
              <div className="image-container">
                {speciality.src ? (
                  <Image
                    src={speciality.src}
                    alt={`Image for ${speciality.title}`}
                    fill
                    style={{ objectFit: 'cover', borderRadius: '8px' }}
                    quality={100} // Ensures high quality
                    priority
                  />
                ) : (
                  <p>Image not available</p>
                )}
              </div>
              <div className="text-overlay">{speciality?.title}</div>
              <div className="top-right-arrow">
                <img src="/spec-arrow.svg" alt="arrow" />
              </div>
            </ImageCard>
          </Link>
        ))}
      </ImageDiv>
    </Section>
  );
}

export default OurSpecialities;
