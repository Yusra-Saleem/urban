export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  spiceLevel: number;
  cookTime: string;
  isVegetarian: boolean;
  isSpicy: boolean;
  badges: string[];
  ingredients?: string[];
  allergens?: string[];
  calories?: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  dish: string;
  location: string;
  date?: string;
  verified?: boolean;
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  discount: number;
  code: string;
  validUntil: Date;
  image: string;
  terms: string[];
  isActive: boolean;
}

export interface DeliveryInfo {
  estimatedTime: string;
  deliveryFee: number;
  minimumOrder: number;
  location: string;
}

export interface Restaurant {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  cuisine: string[];
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  isOpen: boolean;
  distance: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  addresses: Address[];
  preferences: UserPreferences;
}

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

export interface UserPreferences {
  spiceLevel: number;
  dietaryRestrictions: string[];
  favoriteCategories: string[];
  notifications: boolean;
}

export interface OrderStatus {
  id: string;
  status: 'placed' | 'confirmed' | 'preparing' | 'ready' | 'picked-up' | 'delivered';
  estimatedTime: string;
  currentStep: number;
  totalSteps: number;
}