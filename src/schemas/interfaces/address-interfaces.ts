export interface AddressDocument {
  street: string;
  country: string;
  city: string;
  zipCode: string;
  additionalInfo?: string;
  default?: boolean;
}
