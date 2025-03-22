'use client';

import Image from 'next/image';
import { useFetchDescCarousal, useFetchMobCarousal } from '@/lib/data';
import { useFetchHomeServiceHeader } from '@/lib/data';
import { useFetchHomeAboutHero } from '@/lib/data';
import { useFetchConsultants, useFetchHomeConsultantHeader } from '@/lib/data';
import { useFetchHomeSpecialitiesHeader, useFetchSpecialities } from '@/lib/data';
import { useFetchEquipments } from '@/lib/data';
import { useFetchBlogs } from '@/lib/data';
import { useFetchTestimonials } from '@/lib/data';

export default function MainLoader() {
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

  if (
    isLoading || isLoading0 || isLoading1 || isLoading2 || 
    isLoading3 || isLoading4 || isLoading5 || isLoading6 || 
    isLoading7 || isLoading8 || isLoading9
  ) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <Image
          src="/radiant/logo-hr.png"
          alt="Logo"
          width={250} 
          height={250}
          className="animate-pulse"
        />
      </div>
    );
  }

  return null;
}
