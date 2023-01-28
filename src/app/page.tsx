import styles from "./page.module.css";
import Attribution from "@/components/attribution";
import SearchBar from "@/components/searchbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>amogus</div>

      <div className={styles.center}>
        <SearchBar />
      </div>
      <Attribution />
    </main>
  );
}
