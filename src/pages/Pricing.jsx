// Uses the same styles as Product
import PageNav from "../components/PageNav";
import styles from "./AboutUs.module.css";

export default function Pricing() {
  return (
    <main className={styles.AboutUs}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just ₹10,000/weak.
          </h2>
          <p>
            Embark on a journey like never before with WorldWise, your trusted
            companion in global exploration. At WorldWise, we believe in
            creating unforgettable travel experiences, and our pricing is
            designed to offer you the best value for your wanderlust-filled
            adventures.
          </p>
        </div>
        <img src="img-3.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
