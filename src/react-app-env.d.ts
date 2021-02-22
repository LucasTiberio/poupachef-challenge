/// <reference types="react-scripts" />

declare interface SupplierI {
  publicId: string;
  name: string;
  cnpj: string;
  phoneNumber: string;
  zipCode: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhoneNumber: string;
  createdAt: string;
  updatedAt: string;
}

declare interface AppContextInterface {
  theme: 'LIGHT' | 'DARK';
  setTheme(theme: 'LIGHT' | 'DARK'): void;
}
