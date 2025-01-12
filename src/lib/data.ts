import useSWR from 'swr';

/////////////////////////////////// Fetcher ///////////////////////////////////

const BASE_URL = 'https://muhsiiyy.pythonanywhere.com';

const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(`${BASE_URL}${url}`);
  if (!res.ok) {
    throw new Error(`Error fetching data: ${res.statusText}`);
  }
  return res.json();
};

/////////////////////////////////// Types ///////////////////////////////////

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
    title: string;
    specialty: string;
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
    benefits: string
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
    category: string,
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
  Specialties_count: string,
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
  created_at: string;
  updated_at: string;
}

export interface QuickInfo {
  id: number;
  contact: string;
  hours: string;
  location: string;
  created_at: string;
  updated_at: string;
}

export interface Mission {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Vision {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface OurValues {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface CTASection {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}


/////////////////////////////////// Hook ///////////////////////////////////

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