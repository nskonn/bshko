export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  category: 'IT' | 'Economics' | 'Management' | 'Design';
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  programId: string;
  educationLevel: string;
  comments: string;
}
