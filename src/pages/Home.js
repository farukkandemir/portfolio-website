import React, {useEffect, useState} from "react";
import HeroSection from "../components/HeroSection";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

function Home() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="h-screen pt-0">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar open={open} setOpen={setOpen} />
          <HeroSection open={open} />
          <Socials open={open} />
        </>
      )}
    </section>
  );
}

export default Home;
