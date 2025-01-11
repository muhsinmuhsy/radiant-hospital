'use client';
import React from 'react';
import styled from 'styled-components';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import SpecialityHero from '@/components/SpecialityHero';

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

const specialties = [
  { id: '1', title: 'Micro Ear Surgeries', image: '/spec-1.svg' },
  { id: '2', title: 'Endoscopic Ear Surgery', image: '/spec-2.svg' },
  { id: '3', title: 'Endoscopic SIWOS Surgeries', image: '/speciality/siwos.webp' },
  { id: '4', title: 'COBLATION ADENOTONSILLECTOMY', image: '/spec-2.svg' },
  { id: '5', title: 'SURGERIES FOR SNORING', image: '/spec-3.svg' },
  { id: '6', title: 'ENDOLARYNGEAC SURGERIES', image: '/spec-1.svg' },
  { id: '7', title: 'VOICE RESTORATION SURGERIES ', image: '/spec-2.svg' },
  { id: '8', title: 'SKULL BASE SURGERIES  ', image: '/spec-3.svg' },
  { id: '9', title: 'NECK SURGERIES  ', image: '/spec-1.svg' },
  { id: '10', title: 'ENDOSCOPY   ', image: '/spec-3.svg' },
  { id: '11', title: 'SLEEP STUDY AND SLEEP ENDOSCOPY    ', image: '/spec-2.svg' },
  { id: '12', title: '	OTONEUROLOGY    ', image: '/spec-1.svg' },
  { id: '13', title: '	PEDIATRIC OTO RHINO CARYNGOLOGY    ', image: '/spec-3.svg' },
  // Add more specialties here...
];

const SpecialitiesPage = () => {
  return (
    <>
      <Navbar />
      <SpecialityHero/>
      <div className="px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Our Specialties</h1>
          <p className="mt-2 text-gray-600">
            Explore our wide range of specialized medical and surgical interventions to ensure optimal care for our patients.
          </p>
        </div>
        <ImageDiv>
          {specialties.map((specialty) => (
            <Link href={`/pages/specialities/${specialty.id}`} key={specialty.id}>
              <ImageCard>
                <Image
                  src={specialty.image}
                  alt={specialty.title}
                  width={400}
                  height={250}
                />
                <div className="text-overlay">{specialty.title}</div>
              </ImageCard>
            </Link>
          ))}
        </ImageDiv>
      </div>
      <Footer />
    </>
  );
};

export default SpecialitiesPage;
