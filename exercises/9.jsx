import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { css } from "styled-components";

import { buttonCSS, linkCSS } from "../components/Button";
import { Case, SROnly, Stack } from "../components/Layout";
import { useContextExercise } from "../components/pageLayouts/LayoutExercise";

// TEMPLATE PAGE TO BUILD OTHER EXERCISES.

function Exercise() {
  return (
    <>
      <Case title="Something here">...</Case>
    </>
  );
}

/*

*
*
*
*
*
*
*
*
*
*

🚨   SPOILERS AHEAD   🚨

🛑 DO NOT SCROLL MORE 🛑 

🙈   SOLUTION BELOW   🙈


*
*
*
*
*
*
*
*
*
*

*/

function Solution() {
  return (
    <>
      {/* 💡 ... */}
      <Case title="Something here"></Case>
    </>
  );
}

// =============
// =============
// =============
// =============

// Unrelevant boilerplate code / data / css for this exercise

export default function Page() {
  const { variant } = useContextExercise();
  return variant === "exercise" ? <Exercise /> : <Solution />;
}

// ....
