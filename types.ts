
export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  tag: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
}
