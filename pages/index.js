import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import { Banner, PageShell } from "../components/Layout";

const Kicker = styled.p`
  text-align: center;
  color: var(--theme-text_1);
  margin: 1rem 0 2rem;
`;

export default function Home() {
  return (
    <PageShell>
      <Head>
        <title>A11Y in JS @ReactAlicante</title>
        <meta
          name="description"
          content="Workshop - A11Y in JS apps at @reactAlicante"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>A11Y in JS apps</h1>
        <Kicker>The web is awesome and everyone should enjoy it.</Kicker>

        <Banner $tone="danger">
          <span>
            <span class="sr-only">Work in progress</span>
            <span aria-hidden="true">🚧 🚧 🚧</span>
          </span>
          <p>
            Polishing is still being done. Please get the latest version a few
            minutes before the workshop starts.
            <br /> (this banner will then disappear).
          </p>
        </Banner>

        {/* <Link href="exercises/1">Exercise 1</Link>
        <Link href="exercises/2">Exercise 2</Link> */}
      </main>
    </PageShell>
  );
}
