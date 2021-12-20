import Image from "next/image";
import classes from "./hero.module.css";

const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          alt="An Image of Angad Singh"
          src="/images/profile/angadFlying.jpeg"
          layout="responsive"
          objectPosition="50% -100px"
          objectFit="cover"
          width={300}
          height={400}
        />
      </div>
      <h1>Hi, I'm Angad</h1>
      <p>
        I am a Cadet Pilot with Indigo Airlines. When I am not flying planes, I
        like to code!
      </p>
    </section>
  );
};

export default Hero;
