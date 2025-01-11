'use client';
import React from 'react'
import styled from 'styled-components'


export const SectionDiv= styled.div`
 padding: 30px;
 margin: 20px;
`
export const ConatinerDiv= styled.div`
  display: flex;
  justify-content: center;
`

export const LeftDiv= styled.div`
width: 50%;
display: flex;
flex-direction: column;
gap: 25px;


h1{
  font-size: 4rem;
  line-height: 70px;
}

p{
  font-size: 1.2rem;
  color: #484849;
  width: 78%;
}
  
`
export const RightDiv= styled.div`
  width: 50%;


  img{
    width: 100%;
    height: auto;
  }
  
`

function AboutSample() {
  return (
  <SectionDiv>
    <ConatinerDiv>
      <LeftDiv>
      <div className="heading">
        <h1>We Provide affordable, accessible and quality  healthcare for all</h1>
      </div>
      <div className="text">
        <p>Radient Ent Hospital has always been in the forefront
           to introduce the most advanced and sophisticated treatment 
           options in various specialities and subspecialities, most of
            them are at par with the international standards. 
          We  Provide affordable, accessible and quality healthcare for all'</p>
      </div>
    <div className="btn">
    <button>Read more</button>
    </div>
      </LeftDiv>
      <RightDiv>
        <img src="/doc-property.png" alt="img"  />
      </RightDiv>
      
    </ConatinerDiv>
  </SectionDiv>
  )
}

export default AboutSample