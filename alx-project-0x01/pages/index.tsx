import React, { useState } from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const Home: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>("");
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Welcome to our Application!
          </h1>
          <p className="m-6 text-xl text-white">
            We're glad you're here. Explore and enjoy your experience.
          </p>
         <Button/>
  </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home;