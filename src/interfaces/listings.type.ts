export type ListingType = {
  id: string;
  name: string;
  description: string;
  address: string;
  image: string;
  contact_person: string;
  contact_phone: string;
  likes: number;
  price: string;
};

export type ListingsType = ListingType[];
