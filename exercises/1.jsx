import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { css } from "styled-components";

import { buttonCSS, linkCSS } from "../components/Button";
import { Case, SROnly, Stack } from "../components/Layout";
import { useContextExercise } from "../components/pageLayouts/LayoutExercise";
import imgCatRest from "../public/imgs/cat_rest.jpg";
import imgCatSearching from "../public/imgs/cat_searching.jpg";
import imgCatStairing from "../public/imgs/cat_stairing.jpg";

function Exercise() {
  const router = useRouter();

  return (
    <>
      <Case title="What's a link?">
        <Stack gap="24px">
          <div onClick={() => router.push(`/profile`)} css={buttonCSS}>
            My profile A
          </div>

          <Link href="/profile" passHref>
            <a css={buttonCSS}>My profile B</a>
          </Link>
        </Stack>
      </Case>

      <Case title="Go back button">
        <button
          onClick={() => {
            // same as history.back() for react-router
            router.back();
          }}
          css={buttonCSS}
        >
          Go back
        </button>
      </Case>

      <Case title="Generated data">
        <h3>My cute cats</h3>
        <Stack>
          <ul css={cssListCats.ul}>
            {dataCats.map(({ url, name }, i) => (
              <li key={i}>
                <Image src={url} alt="Cat_photo" />
                <div css={cssListCats.info}>
                  <span>{name}</span>
                  <a href={`#cat-link/${i}`} css={linkCSS}>
                    View
                    <span className="sr-only">{name}</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Stack>
      </Case>
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
  const router = useRouter();

  return (
    <>
      {/* 💡 Nothing changes here */}
      <Case title="What's a link?">
        <Stack gap="24px">
          {/* 💡 Whenever you deal with routes directly, use a Link instead of div/button */}
          <div onClick={() => router.push(`/profile`)} css={buttonCSS}>
            My profile A
          </div>

          <Link href="/profile" passHref>
            <a css={buttonCSS}>My profile B</a>
          </Link>
        </Stack>
      </Case>

      <Case title="Go back button">
        <button
          onClick={() => {
            // 💡 Verify if previous page exists before using router.back
            const hasPreviousPage = window.history.length > 1;

            if (hasPreviousPage) {
              router.back();
            } else {
              router.push("/"); // fallback to homepage
            }
            {
              /* P.S. You could isolate this into a "<GoBackButton /> */
            }
          }}
          css={buttonCSS}
        >
          Go back
        </button>
      </Case>

      <Case title="Generated data">
        <h3>My cute cats</h3>

        <Stack>
          <ul css={cssListCats.ul}>
            {dataCats.map(({ url, name }, i) => (
              <li key={i}>
                {/* 💡 Alt is redundat because the name is right after. So, it can be empty alt="" */}
                <Image src={url} alt="" />
                <div css={cssListCats.info}>
                  <span>{name}</span>
                  <a href={`#cat-link/${i}`} css={linkCSS}>
                    View
                    {/* 💡 Make the link unique for SRs, using sr-only. */}
                    <span className="sr-only">{name}</span>
                    {/* <SROnly>{name}</SROnly> */}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Stack>
      </Case>
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

var refs = [
  {
    name: "Buttons vs Links",
    url: "https://css-tricks.com/a-complete-guide-to-links-and-buttons/",
  },
  {
    name: "Good focus indicators",
    url: "https://www.sarasoueidan.com/blog/focus-indicators/",
  },
  {
    name: "Accessible routing",
    url: "https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/",
  },
];

const dataCats = [
  {
    url: imgCatRest,
    name: "Tokio",
  },
  {
    url: imgCatSearching,
    name: "Oscar",
  },
  {
    url: imgCatStairing,
    name: "Luna",
  },
];

var cssListCats = {
  ul: css`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 24px;

    li {
      flex-basis: 33%;
    }
  `,
  info: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,
};
