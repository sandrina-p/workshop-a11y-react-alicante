import Head from "next/head";
import Link from "next/link";
import React from "react";

import { buttonCSS } from "../Button";
import { PageShell, Stack } from "../Layout";

function SolutionToggler() {
  const { variant, toggleVariant } = useContextExercise();

  return (
    <button onClick={toggleVariant}>
      {variant === "exercise" ? "Show solution" : "Show exercise"}
    </button>
  );
}

// ============

const ExerciseContext = React.createContext();

export function LayoutExercise({ children, title }) {
  const [variant, setVariant] = React.useState("exercise"); // exercise | solution

  function toggleVariant() {
    setVariant((state) => (state === "exercise" ? "solution" : "exercise"));
  }
  return (
    <ExerciseContext.Provider value={{ variant, toggleVariant }}>
      <PageShell data-variant={variant}>
        <Head>
          <title>Exercise: {title}</title>
        </Head>

        <header>
          <Link href="/" css={buttonCSS}>
            Back home
          </Link>

          <SolutionToggler />
        </header>
        <Stack as="main" my="36px" direction="column" gap="100px">
          {children}
        </Stack>
      </PageShell>
    </ExerciseContext.Provider>
  );
}

export function useContextExercise() {
  const context = React.useContext(ExerciseContext);
  if (context === undefined) {
    throw new Error("useContextExercise is not within a ExerciseProvider");
  }
  return context;
}
