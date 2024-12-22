export interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  };
}

// Common interface for company
export interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}

// User interface
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressProps;
  phone: string;
  website: string;
  company: CompanyProps;
}

// Post interface
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Post data for creating or editing a post
export interface PostData {
  userId: number;
  id?: number; // Optional for new posts
  title: string;
  body: string;
}

// Modal for managing posts
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface BaseUser { 
  id: number; 
  name: string; 
  username: string; 
  email: string; 
  address: AddressProps; 
  phone: string; 
  website: string; 
  company: CompanyProps; 
} 
  export interface UserProps extends BaseUser {
    additionalProp?: string;
  }

export interface ModalProps extends BaseUser {
   onClose: () => void; onSubmit: (user: BaseUser) => void; 
  }

// Modal for managing users (inherits from UserProps)
export interface ModalProps extends UserProps {
  isActive: boolean; 
}