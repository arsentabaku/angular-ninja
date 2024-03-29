export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
  },
  {
    id: 4,
    name: 'Phone Max',
    price: 980,
    description: 'A great phone with one of the best batteries',
  },
  {
    id: 5,
    name: 'Phone Economy',
    price: 199,
    description: '',
  },
];
