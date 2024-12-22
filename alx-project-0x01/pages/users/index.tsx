import React from "react";
import Header from "@/components/layout/Header";
import { GetStaticProps } from "next";
import UserCard from "@/components/common/UserCard"
import { UserProps } from "@/interfaces";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface UsersProps {
  posts: User[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        {posts.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
};

export default Users;
