'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Navbar';

import Link from 'next/link';
import Image from 'next/image';
import SpecialityHero from '@/components/SpecialityHero';
import { useFetchSpecialities, useFetchSpecialitiesMainHeader } from '@/lib/data';
import Footer from '@/components/Footer';

const ImageDiv = styled.div`
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

const ImageCard = styled.div`
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
    filter: brightness(80%);
  }

  .text-overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    padding: 10px;
    border-radius: 5px;
    width: 50%;
    font-size: 1.2rem;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    img {
      transform: scale(1.1);
    }
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  background-color: #f0f4f8;
  padding: 10px;
  border-radius: 50px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const ToggleButton = styled.button`
  padding: 12px 24px;
  margin: 0 5px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.active === 'true' ? '#795F9F' : 'transparent'};
  color: ${props => props.active === 'true' ? 'white' : '#6c757d'};
  
  transform: ${props => props.active === 'true' ? 'scale(1.05)' : 'scale(1)'};

  &:hover {
    background-color: ${props => props.active === 'true' 
      ? '#8B489A' 
      : '#D4BEDE'};
    color: ${props => props.active === 'true' ? 'white' : '#795F9F'};
  }

  &:focus {
    outline: none;
  }
`;

const SpecialitiesPage = () => {
  const [activeView, setActiveView] = useState('surgery');

  const { specialities, isLoading, error } = useFetchSpecialities();
  const { data: SpecialitiesMainHeaderData, isLoading: isLoading0, error: error0 } = useFetchSpecialitiesMainHeader();

  const displaySpecialties = specialities || [];

  if (error) {
    console.log(`Error loading data: ${error.message}`);
  }
  
  if (error0) {
    console.log(`Error loading data: ${error0.message}`);
  }

  const filteredSpecialties = displaySpecialties.filter(
    (specialty) => specialty.category === (activeView === 'surgery' ? "Surgical Procedures" : "Endoscopic Surgery")
  );

  return (
    <>
      <Navbar />
      <SpecialityHero />
      <div className="px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            {SpecialitiesMainHeaderData?.title}
          </h1>
          <p className="mt-2 text-gray-600">
            {SpecialitiesMainHeaderData?.description}
          </p>
        </div>

        {/* Toggle Buttons */}
        <ToggleContainer>
          <ToggleButton 
            active={String(activeView === 'surgery')}
            onClick={() => setActiveView('surgery')}
          >
            Surgical Procedures
          </ToggleButton>
          <ToggleButton 
            active={String(activeView === 'endoscopy')}
            onClick={() => setActiveView('endoscopy')}
          >
            Endoscopic Surgery
          </ToggleButton>
        </ToggleContainer>

        <ImageDiv>
          {filteredSpecialties?.map((specialty) => (
            <Link href={`/specialities/${specialty.id}`} key={specialty.id}>
              <ImageCard>
                <Image
                  src={specialty.src}
                  alt={specialty.title}
                  width={400}
                  height={250}
                  priority
                />
                <div className="text-overlay">{specialty.title}</div>
              </ImageCard>
            </Link>
          ))}
        </ImageDiv>
      </div>
      
  <Footer/>
    </>
  );
};

export default SpecialitiesPage;
