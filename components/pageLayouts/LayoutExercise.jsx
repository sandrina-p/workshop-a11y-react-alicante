import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

import { linkCSS } from "../Button";
import { PageShell, Stack } from "../Layout";

const BtnToggle = styled.button`
  all: unset;
  border: 1px solid #aaa;
  padding: 4px 8px;
  border-radius: 6px;

  &:hover {
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: none;
    box-shadow: var(--theme-focus_shadow);
  }

  ${({ $dark }) =>
    $dark &&
    css`
      background-color: var(--theme-text_0);
      color: var(--theme-text_invert);
    `}
`;

function SolutionToggler() {
  const { variant, toggleVariant } = useContextExercise();

  return (
    <BtnToggle onClick={toggleVariant} $dark={variant === "solution"}>
      {variant === "exercise" ? "Show solution" : "Show exercise"}
    </BtnToggle>
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

        <Stack
          as="header"
          justifyContent="space-between"
          alignItems="center"
          mb="12px"
        >
          <Link href="/" passHref>
            <a css={linkCSS}>Back home</a>
          </Link>

          <SolutionToggler />
        </Stack>

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
