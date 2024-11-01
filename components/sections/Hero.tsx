import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

const Hero = () => {
  return (
    <section className="relative py-32 md:py-48">
      <Container className="relative">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
              Hi, I&apos;m <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              Full Stack Developer
            </h2>
          </div>

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Crafting digital experiences with modern web technologies. Focused
            on building responsive and user-friendly applications.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">View Projects</Button>
            <Button size="lg" variant="secondary">
              Download CV
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
