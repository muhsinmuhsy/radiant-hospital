'use client';
import React from 'react';
import styled from 'styled-components';

// Styled Components
export const Section = styled.section`
  padding: 50px;
  background-color: #f8f9fa;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
`;

function OurEquipments() {
  const equipments = [
    { name: 'X-Ray Machine', description: 'High-resolution X-ray machine.', img: '/airflow.jpg' },
    { name: 'MRI Scanner', description: 'State-of-the-art MRI scanner.', img: '/carl-zeiss.jpg' },
    { name: 'CT Scanner', description: 'Advanced CT scanning technology.', img: '/carl-pico.jpeg' },
    { name: 'Ultrasound Machine', description: 'Real-time imaging.', img: '/equip-ultrasound.jpg' },
    { name: 'ECG Monitor', description: 'Accurate ECG monitoring.', img: '/equip-ecg.jpg' },
    { name: 'Anesthesia Machine', description: 'Safe and reliable anesthesia.', img: '/equip-anesthesia.jpg' },
  ];

  return (
    <Section>
      <Title>Our Equipments</Title>
      <Description>We are equipped with cutting-edge medical technology to provide the best care for our patients.</Description>
      <Grid>
        {equipments.map((equipment, index) => (
          <Card key={index}>
            <CardImage src={equipment.img} alt={equipment.name} />
            <CardContent>
              <CardTitle>{equipment.name}</CardTitle>
              <CardDescription>{equipment.description}</CardDescription>
            </CardContent>
            <Overlay>New</Overlay>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default OurEquipments;
