// Address interface
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

// Base User interface
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

// User interface that extends BaseUser for additional properties
export interface UserProps extends BaseUser {
  additionalProp?: string;
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

// Modal for managing users
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserProps) => void;
  isActive: boolean;
}
