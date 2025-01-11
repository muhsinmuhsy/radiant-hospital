import useSWR from 'swr';

/////////////////////////////////// Fetcher ///////////////////////////////////

const fetcher = async (url: string): Promise<any> => {
  const res = await fetch(url);
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
    description: string;
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
}
  
export interface Equipment {
    id: number,
    name: string,
    short_desc: string,
    description: string,
    image: string,
    color: string,
    specs: {
        airflowType: string,
        filtrationEfficiency: string,
        noiseLevel: string,
        compliance: string
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

/////////////////////////////////// Hook ///////////////////////////////////

export function useFetchHomeAboutHero() {
  const { data, error, isLoading } = useSWR<HomeAboutHero[]>(
    'https://muhsiiyy.pythonanywhere.com/readonly-home-about-hero/',
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
      'https://muhsiiyy.pythonanywhere.com/readonly-home-service-header/',
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
      'https://muhsiiyy.pythonanywhere.com/readonly-services/',
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
      'https://muhsiiyy.pythonanywhere.com/readonly-home-consultant-header/',
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
      'https://muhsiiyy.pythonanywhere.com/readonly-consultants/',
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
      'https://muhsiiyy.pythonanywhere.com/readonly-home-specialities-header/',
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
      'https://muhsiiyy.pythonanywhere.com/readonly-specialities/',
      fetcher
    );
  
    return {
        specialities: data || null,
        isLoading,
        error,
    };
}

export function useFetchEquipments() {
    const { data, error, isLoading } = useSWR<Speciality[]>(
      'https://muhsiiyy.pythonanywhere.com/readonly-equipments/',
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
      'https://muhsiiyy.pythonanywhere.com/readonly-blogs/',
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
      'https://muhsiiyy.pythonanywhere.com/readonly-testimonials/',
      fetcher
    );
  
    return {
        testimonials: data || null,
        isLoading,
        error,
    };
}