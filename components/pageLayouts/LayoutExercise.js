import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/App.module.css";

export function LayoutExercise({ children, type }) {
  const router = useRouter();
  const exerciseIndex = router.route.split("/")[2];

  return (
    <div className={styles.layoutContent}>
      <Head>
        <title>Exercise {exerciseIndex}</title>
      </Head>

      <header>
        <Link href="/">Back home</Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
