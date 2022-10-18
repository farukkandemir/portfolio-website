import React, {useEffect, useState} from "react";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <Socials />
        </>
      )}
    </div>
  );
}

export default Home;
