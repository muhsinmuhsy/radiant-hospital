'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { 
  useFetchDescCarousal, useFetchMobCarousal, 
  useFetchHomeServiceHeader, useFetchHomeAboutHero, 
  useFetchConsultants, useFetchHomeConsultantHeader, 
  useFetchHomeSpecialitiesHeader, useFetchSpecialities, 
  useFetchEquipments, useFetchBlogs, useFetchTestimonials 
} from '@/lib/data';

export default function MainLoader() {
  const [showLoader, setShowLoader] = useState(true);

  const { isLoading } = useFetchDescCarousal();
  const { isLoading: isLoading0 } = useFetchMobCarousal();
  const { isLoading: isLoading1 } = useFetchHomeAboutHero();
  const { isLoading: isLoading2 } = useFetchHomeServiceHeader();
  const { isLoading: isLoading3 } = useFetchConsultants();
  const { isLoading: isLoading4 } = useFetchHomeConsultantHeader();
  const { isLoading: isLoading5 } = useFetchHomeSpecialitiesHeader();
  const { isLoading: isLoading6 } = useFetchSpecialities();
  const { isLoading: isLoading7 } = useFetchEquipments();
  const { isLoading: isLoading8 } = useFetchBlogs();
  const { isLoading: isLoading9 } = useFetchTestimonials();

  useEffect(() => {
    if (
      !isLoading && !isLoading0 && !isLoading1 && !isLoading2 && 
      !isLoading3 && !isLoading4 && !isLoading5 && !isLoading6 && 
      !isLoading7 && !isLoading8 && !isLoading9
    ) {
      setShowLoader(false);
    }
  }, [
    isLoading, isLoading0, isLoading1, isLoading2, 
    isLoading3, isLoading4, isLoading5, isLoading6, 
    isLoading7, isLoading8, isLoading9
  ]);

  if (showLoader) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <Image
          src="/radiant/loader-icon.png"
          alt="Logo"
          width={150} 
          height={150}
          className="animate-spin"
        />
      <p className="mt-4 text-lg font-semibold">Loading...</p>
    </div>
    
    );
  }

  return null;
}
