import { FaPaintBrush, FaCode, FaMobileAlt, FaPenAlt, FaPalette, FaBullhorn } from 'react-icons/fa'; 
import Card from '../components/Card'
import styles from './services.module.css'
import Heading from '../components/Heading';

function Services() {
  return (
    <>
    <div>
      <Heading title='Services' subtitle='The Services I will Provide My Clients'/>
    </div>
    <div className={styles.content}>
      <Card 
        title="UI & UX Design" 
        description="Designing user-friendly interfaces and crafting seamless user experiences that keep your audience engaged."
        Icon={FaPaintBrush}
      />
      <Card 
        title="Web Development" 
        description="Building scalable and modern web applications with the latest technology stack."
        Icon={FaCode}
      />
      <Card 
        title="Video Editing" 
        description="Creating professional and dynamic video content, from editing clips to post-production, for various platforms."
        Icon={FaMobileAlt}
      />
      <Card 
  title="Content Writing" 
  description="Creating engaging, SEO-optimized content for blogs, websites, and social media."
  Icon={FaPenAlt}
/>

<Card 
  title="Logo Designing" 
  description="Designing unique and creative logos that represent your brand identity."
  Icon={FaPalette}
/>

<Card 
  title="Digital Marketing" 
  description="Boosting your online presence through effective social media and SEO strategies."
  Icon={FaBullhorn}
/>

    </div>
    </>
  );
}

export default Services;
