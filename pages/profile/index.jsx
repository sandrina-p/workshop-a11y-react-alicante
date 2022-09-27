import Head from "next/head";
import { useRouter } from "next/router";

import { linkCSS } from "../../components/Button";
import { PageShell } from "../../components/Layout";

export default function Profile() {
  const router = useRouter();

  function handleGoBack() {
    const hasPrevPage = window.history.length > 1;

    if (hasPrevPage) {
      router.back();
    } else {
      router.push("/"); // fallback to homepage
    }
  }

  return (
    <PageShell>
      <Head>
        <title>Profile</title>
      </Head>

      <main>
        <h1>Profile Page</h1>

        {/*
        🐛 React Router and Next do not support go back using <Link />
          https://stackoverflow.com/questions/72676015/react-router-go-back-using-link
        */}
        <button onClick={handleGoBack} css={linkCSS}>
          Go Back
        </button>

        <br />
        <br />

        <p>This would be your profile page...</p>
      </main>
    </PageShell>
  );
}
