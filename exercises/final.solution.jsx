import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { css } from "styled-components";

import { buttonCSS, linkCSS } from "../components/Button";
import { Case, SROnly, Stack } from "../components/Layout";
import { useContextExercise } from "../components/pageLayouts/LayoutExercise";

/**
All problems in this page:

1. The image does not have an alt
2. The price old/new is not semantic.
3. Characterists list should be a ul>li
4. Add to cart
  1. Missing live region on header
  2. Disabled button prevents focus tooltip
5. Back to top 
  1. Missing div -> button 
  2. Missing accessible name
  3. missing focus control to header.
6. Breadcrumb 
  1. missing aria-current.
  2. Color contrast is not great.
7. Tabs are not accessible.
  CONTINUE HEREE!!
 */

export default function Solution() {
  return (
    <>
      {/* 💡 ... */}
      <Case title="Something here"></Case>
    </>
  );
}
