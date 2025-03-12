import useSWR from 'swr';
import { useState, useEffect } from "react";


/////////////////////////////////// Fetcher ///////////////////////////////////

export const BASE_URL = 'https://muhsiiyy.pythonanywhere.com';

const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(`${BASE_URL}${url}`);
  if (!res.ok) {
    throw new Error(`Error fetching data: ${res.statusText}`);
  }
  return res.json();
};

/////////////////////////////////// Types ///////////////////////////////////

export interface DescCarousal {
  id: number;
  image: string;
}

export interface MobCarousal {
  id: number;
  image: string;
}

export interface HomeAboutHero {
  id: number;
  title: string;
  description: string;
}

export interface HomeServiceHeader {
    id: number;
    title: string;
    description: string;
}

export interface Service {
    id: number;
    icon: string;
    title: string;
    description: string;
}

export interface HomeConsultantHeader {
    id: number;
    title: string;
    description: string;
}

export interface Consultant {
  id: number;
  image: string;
  name: string;
  specialty: string;
  qualification: string;
  experience: string;
  contact: string;
  email: string;
  location: string;
  description: string;
  specialized_departments: string[];
  available_days: {
      day: string;
      timeSlots: {
          time: string;
          type: string;
      }[];
  }[];
}

export interface HomeSpecialitiesHeader {
    id: number;
    title: string;
    description: string;
}

export interface Speciality {
    id: number;
    image: string;
    title: string;
    description: string;
    about: string,
    stat: string,
    benefits: string,
    category: string,
}
  
export interface Equipment {
    id: number,
    name: string,
    short_desc: string,
    description: string,
    image: string,
    color: string,
    specs: {
    }
}

export interface Blog {
    id: number,
    image: string,
    author: string,
    categories: string,
    title: string,
    date: string,
    description: string,
    time_ago: string,
    is_latest: boolean
}

export interface Testimonial {
    id: number,
    name: string,
    treatment: string,
    content: string,
    rating: string,
    date: string,
}

export interface SpecialitiesHero {
  id: number,
  simple_title: string,
  title: string,
  description: string,
  specialties_count: string,
  surgeries_count: string,
  years_exp_count: string,
  image: string,
  image_badge_one: string,
  image_badge_two: string,
}

export interface SpecialitiesMainHeader {
  id: number;
  title: string;
  description: string;
}

export interface ConsultantsMainHeader {
  id: number;
  title: string;
  description: string;
}

export interface ContactHero {
  id: number;
  title_one: string;
  title_two: string;
  description: string;
}

export interface QuickInfo {
  id: number;
  contact: string;
  hours: string;
  location: string;
}

export interface Mission {
  id: number;
  title: string;
  description: string;
}

export interface Vision {
  id: number;
  title: string;
  description: string;
}

export interface OurValues {
  id: number;
  title: string;
  description: string;
}

export interface CTASection {
  id: number;
  title: string;
  description: string;
}

// AboutHero Type
export interface AboutHero {
  id: number; 
  title: string;
  description?: string | null; 
  created_at: string; 
  updated_at: string;
}

// AboutStats Type
export interface AboutStats {
  id: number;
  label: string;
  number: string;
}

// AboutCoreValues Type
export interface AboutCoreValues {
  id: number;
  name: string;
}

// AboutFeatures Type
export interface AboutFeatures {
  id: number;
  title: string;
  description?: string | null;
}

// AboutAchievements Type
export interface AboutAchievements {
  id: number;
  title: string;
  description?: string | null;
}

// AboutContactDetails Type
export interface AboutContactDetails {
  id: number;
  phone: string;
  mail: string;
  location: string;
  time: string;
}

export interface GetInTouch {
  id: number;
  location: string;
  phone: string;
  email: string;
  working_hours: string;
};

export interface ServiceHero {
  id: number;
  title: string;
  description: string;
}

export interface CTAButton {
  id: number;
  single_title: string;
  title: string;
  description: string;
}


/////////////////////////////////// Hook ///////////////////////////////////

export function useFetchDescCarousal() {
  const { data, error, isLoading } = useSWR<DescCarousal[]>(
    '/readonly-desc-carousal/',
    fetcher
  );

  return {
    data: data || null,
    isLoading,
    error,
  };
}

export function useFetchMobCarousal() {
  const { data, error, isLoading } = useSWR<MobCarousal[]>(
    '/readonly-mob-carousal/',
    fetcher
  );

  return {
    data: data || null,
    isLoading,
    error,
  };
}

export function useFetchHomeAboutHero() {
  const { data, error, isLoading } = useSWR<HomeAboutHero[]>(
    '/readonly-home-about-hero/',
    fetcher
  );

  return {
    aboutHero: data ? data[0] : null, // Return the first element as the API response is a list
    isLoading,
    error,
  };
}


export function useFetchHomeServiceHeader() {
    const { data, error, isLoading } = useSWR<HomeServiceHeader[]>(
      '/readonly-home-service-header/',
      fetcher
    );
  
    return {
      serviceHeader: data ? data[0] : null,
      isLoading,
      error,
    };
}
  
export function useFetchServices() {
    const { data, error, isLoading } = useSWR<Service[]>(
      '/readonly-services/',
      fetcher
    );
  
    return {
      service: data || null,
      isLoading,
      error,
    };
  }


  export function useFetch2Services() {
    const [services, setServices] = useState<Service[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const fetchServices = async () => {
        try {
          const response = await fetch("/readonly-services/");
          if (!response.ok) {
            throw new Error("Failed to fetch services");
          }
          const data: Service[] = await response.json();
          setServices(data);
        } catch (err) {
          setError(err as Error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchServices();
    }, []);
  
    return { services, isLoading, error };
  }

export function useFetchHomeConsultantHeader() {
    const { data, error, isLoading } = useSWR<HomeConsultantHeader[]>(
      '/readonly-home-consultant-header/',
      fetcher
    );
  
    return {
      consultantHeader: data ? data[0] : null,
      isLoading,
      error,
    };
}
  
export function useFetchConsultants() {
    const { data, error, isLoading } = useSWR<Consultant[]>(
      '/readonly-consultants/',
      fetcher
    );
  
    return {
        consultant: data || null,
        isLoading,
        error,
    };
  }

export function useFetchHomeSpecialitiesHeader() {
    const { data, error, isLoading } = useSWR<HomeSpecialitiesHeader[]>(
      '/readonly-home-specialities-header/',
      fetcher
    );
  
    return {
      specialitiesHeader: data ? data[0] : null,
      isLoading,
      error,
    };
}
  
export function useFetchSpecialities() {
    const { data, error, isLoading } = useSWR<Speciality[]>(
      '/readonly-specialities/',
      fetcher
    );
  
    return {
        specialities: data || null,
        isLoading,
        error,
    };
}

export function useViewSpeciality(specialityId: number) {
  const { data, error, isLoading } = useSWR<Speciality>(
    specialityId ? `/readonly-specialities/${specialityId}/` : null,
    fetcher
  );

  return {
    data : data || {},
    isLoading,
    error
  };
}

export function useFetchEquipments() {
    const { data, error, isLoading } = useSWR<Speciality[]>(
      '/readonly-equipments/',
      fetcher
    );
  
    return {
        equipments: data || null,
        isLoading,
        error,
    };
}

export function useFetchBlogs() {
    const { data, error, isLoading } = useSWR<Blog[]>(
      '/readonly-blogs/',
      fetcher
    );
  
    return {
        blogs: data || null,
        isLoading,
        error,
    };
}


export function useViewBlog(blogId: number) {
  const { data, error, isLoading } = useSWR<Blog>(
    blogId ? `/readonly-blogs/${blogId}/` : null,
    fetcher
  );

  return {
    data : data || {},
    isLoading,
    error
  };
}

export function useFetchTestimonials() {
    const { data, error, isLoading } = useSWR<Testimonial[]>(
      '/readonly-testimonials/',
      fetcher
    );
  
    return {
        testimonials: data || null,
        isLoading,
        error,
    };
}

export function useFetchSpecialitiesHero() {
  const { data, error, isLoading } = useSWR<SpecialitiesHero[]>(
    '/readonly-specialities-hero/',
    fetcher
  );

  return {
      data: data ? data[0] : null,
      isLoading,
      error,
  };
}

export function useFetchSpecialitiesMainHeader() {
  const { data, error, isLoading } = useSWR<SpecialitiesMainHeader[]>(
    '/readonly-specialities-main-header/',
    fetcher
  );

  return {
      data: data ? data[0] : null,
      isLoading,
      error,
  };
}

export function useFetchConsultantsMainHeader() {
  const { data, error, isLoading } = useSWR<ConsultantsMainHeader[]>(
    '/readonly-consultants-main-header/',
    fetcher
  );

  return {
      data: data ? data[0] : null,
      isLoading,
      error,
  };
}

export function useFetchContactHero() {
  const { data, error, isLoading } = useSWR<ContactHero[]>(
    '/readonly-contact-hero/',
    fetcher
  );

  return {
    data: data ? data[0] : null,
    isLoading,
    error,
  };
}

export function useFetchQuickInfo() {
  const { data, error, isLoading } = useSWR<QuickInfo[]>(
    '/readonly-quick-info/',
    fetcher
  );

  return {
    data: data ? data[0] : null,
    isLoading,
    error,
  };
}

export function useFetchMission() {
  const { data, error, isLoading } = useSWR<Mission[]>(
    '/readonly-mission/',
    fetcher
  );

  return {
    data: data ? data[0] : null,
    isLoading,
    error,
  };
}

export function useFetchVision() {
  const { data, error, isLoading } = useSWR<Vision[]>(
    '/readonly-vision/',
    fetcher
  );

  return {
    data: data ? data[0] : null,
    isLoading,
    error,
  };
}

export function useFetchOurValues() {
  const { data, error, isLoading } = useSWR<OurValues[]>(
    '/readonly-our-values/',
    fetcher
  );

  return {
    data: data ? data : null,
    isLoading,
    error,
  };
}

export function useFetchCTASection() {
  const { data, error, isLoading } = useSWR<CTASection[]>(
    '/readonly-cta-section/',
    fetcher
  );

  return {
    data: data ? data[0] : null,
    isLoading,
    error,
  };
}


// Hook for AboutHero
export function useFetchAboutHero() {
  const { data, error, isLoading } = useSWR<AboutHero[]>('/readonly-about-hero/', fetcher);

  return {
    data: data ? data[0] : null,
    isLoading,
    error,
  };
}

// Hook for AboutStats
export function useFetchAboutStats() {
  const { data, error, isLoading } = useSWR<AboutStats[]>('/readonly-about-stats/', fetcher);

  return {
    data: data || [],
    isLoading,
    error,
  };
}

// Hook for AboutCoreValues
export function useFetchAboutCoreValues() {
  const { data, error, isLoading } = useSWR<AboutCoreValues[]>('/readonly-about-core-values/', fetcher);

  return {
    data: data || [],
    isLoading,
    error,
  };
}

// Hook for AboutFeatures
export function useFetchAboutFeatures() {
  const { data, error, isLoading } = useSWR<AboutFeatures[]>('/readonly-about-features/', fetcher);

  return {
    data: data || [],
    isLoading,
    error,
  };
}

// Hook for AboutAchievements
export function useFetchAboutAchievements() {
  const { data, error, isLoading } = useSWR<AboutAchievements[]>('/readonly-about-achievements/', fetcher);

  return {
    data: data || [],
    isLoading,
    error,
  };
}

// Hook for AboutContactDetails
export function useFetchAboutContactDetails() {
  const { data, error, isLoading } = useSWR<AboutContactDetails[]>('/readonly-about-contact-details/', fetcher);

  return {
    data: data ? data[0] : null,
    isLoading,
    error,
  };
}


export function useFetchGetInTouch() {
  const { data, error, isLoading } = useSWR<GetInTouch[]>(
    '/readonly-get-in-touch/',
    fetcher
  );

  return {
    data: data ? data[0] : null,
    isLoading,
    error,
  };
}

export function useFetchServiceHero() {
  const { data, error, isLoading } = useSWR<ServiceHero[]>(
    '/readonly-service-hero/',
    fetcher
  );

  return {
    data: data ? data[0] : null,
    isLoading,
    error,
  };
}

export function useFetchCTAButton() {
  const { data, error, isLoading } = useSWR<CTAButton[]>(
    '/readonly-cta-button/',
    fetcher
  );

  return {
    data: data ? data[0] : null,
    isLoading,
    error,
  };
}