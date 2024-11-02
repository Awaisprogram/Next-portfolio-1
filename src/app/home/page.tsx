import Button from '../components/button';
import styles from './home.module.css';

const Intro = () => {
  return (
    <div id="home" className={styles.intro}>
      <h1>
        I am <span className={styles.highlight}>Awais Mehmood</span>
      </h1>
      <p className={styles.profession}>Web Developer</p>
      <p className={styles.description}>
        Design and code beautifully simple projects without overwhelming yourself with complexity. Enjoy your passion for creating modern and responsive web applications with ease and love. Skilled in HTML, CSS, BootStrap, Tailwind, JavaScript, TypeScript, React, and Next.js . I am currently exploring Generative AI, Web3, and the Metaverse.
      </p>
      <Button click='Veiw Portfolio'/>
    </div>
  );
};

export default Intro;
