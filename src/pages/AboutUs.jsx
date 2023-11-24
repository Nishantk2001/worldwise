import PageNav from "../components/PageNav";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <main className={styles.AboutUs}>
      <PageNav />
      <section>
        <img
          src="img-4.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <h6>
            Welcome to WorldWise – Your Gateway to Extraordinary Journeys!
          </h6>
          <p>
            At WorldWise, we believe that travel is not just about visiting new
            places. it is about creating unforgettable experiences that last a
            lifetime. Our passion for exploration and discovery drives us to
            curate exceptional travel adventures that go beyond the ordinary.
          </p>
        </div>
      </section>
    </main>
  );
}
