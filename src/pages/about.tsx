import styles from "@/app/page.module.css";
import Navbar from "@/components/navbar";

function About() {
  return (
    <div className={styles.container}>
      <Navbar />
      <center>
        <h1>About Us</h1>
        <p style={{ textAlign: "left" }}>
          Our team consists of three people: Redger (main programmer), Kevin
          Fang (main designer), and Adithya Prem (main motivation/emotional
          support). We have created a website that will allow users to search
          for a food item of their choice and help them find restaurants in
          their local area that supports their wants and needs.
        </p>
        <p style={{ textAlign: "left" }}>
          This system uses an API to find food services nearby (by using
          Geolocation) that offers a specific meal in their menu. Then, we
          display the information of each meal, such as prices and nutritional
          information. In order to let the user have a better experience on our
          website, we used CSS to create tables, dropdown boxes, search queries,
          and a navigation bar.
        </p>
      </center>
    </div>
  );
}

export default About;
