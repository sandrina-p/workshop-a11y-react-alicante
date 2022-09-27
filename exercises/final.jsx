/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { css } from "styled-components";

import { buttonCSS, linkCSS } from "../components/Button";
import { Case, IconArrowTop, SROnly, Stack } from "../components/Layout";
import { useContextExercise } from "../components/pageLayouts/LayoutExercise";
import ImgMonstera from "../public/imgs/monstera.png";
import Solution from "./final.solution";
import * as Styles from "./final.styled";

function Exercise() {
  return (
    <>
      <Case>
        <div></div>

        <div css={Styles.header}>
          <h1 css={Styles.plantName}>Monstera Deliciosa</h1>
          <p css={[Styles.headerTag, Styles.tagSecondary]}>On Sale</p>
        </div>

        <div css={Styles.info}>
          <h2 css={Styles.srOnly}>Characteristics</h2>
          <div>
            <Stack gap="12px">
              <Stack direction="column">
                <h2 css={Styles.srOnly}>Details</h2>
                <p>
                  Monstera deliciosa, also known as the Swiss cheese plant, is a
                  species of flowering plant native to tropical forests of
                  southern Mexico, south to Panama.
                </p>
                <div css={Styles.price}>
                  <p css={Styles.priceOriginal}>
                    <span css={Styles.srOnly}>Old price:</span> $40.00
                  </p>
                  <p css={Styles.priceFinal}>
                    <span css={Styles.srOnly}>New price: $30.00</span>
                    <span aria-hidden="true">$30.00</span>
                  </p>
                </div>
                <button css={Styles.btnCta}>Add to cart</button>
              </Stack>

              <div css={[Styles.media]}>
                <Image
                  css={Styles.mediaImg}
                  src={ImgMonstera}
                  alt="a plant in a vase"
                />
              </div>
            </Stack>
          </div>
        </div>
        <div>
          <section css={Styles.details}>
            <h2>Characteristics</h2>
            <ul css={[Styles.topic, Styles.infoPart]}>
              <li>
                <span css={Styles.topicKey}>Family</span>
                <span css={Styles.topicValue}>Araceae</span>
              </li>
              <li>
                <span css={Styles.topicKey}>Temperature</span>
                <span css={Styles.topicValue}>20ºC</span>
              </li>
              <li>
                <span css={Styles.topicKey}>Water</span>
                <span css={Styles.topicValue}>1/week</span>
              </li>
            </ul>
          </section>
          <section css={Styles.details}>
            <h2>Cultivation</h2>
            <p css={Styles.placeholder}>Some text that occupies space</p>
          </section>

          <section css={Styles.details}>
            <h2>Toxicity</h2>
            <p css={Styles.placeholder}>Some other text.</p>
          </section>

          <section css={Styles.details}>
            <h2>Similar plants</h2>
            <p css={Styles.placeholder}>Content that fits here.</p>
          </section>

          <Stack justifyContent="flex-end" my="12px">
            <div
              onClick={() => {
                // Scroll back to top
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              css={Styles.btnTop}
            >
              <IconArrowTop />
            </div>
          </Stack>

          <Breadcrumbs
            items={[
              {
                name: "Plants",
                href: "/plants",
              },
              {
                name: "Tropical",
                href: "/plants?category=tropical",
              },
              {
                name: "Monstera Deliciosa",
                isCurrent: true,
              },
            ]}
          />
        </div>
      </Case>
    </>
  );
}

function Breadcrumbs({ items }) {
  return (
    <nav>
      <ol css={Styles.breadcrumbs}>
        {items.map(({ name, href, isCurrent }) => (
          <li key={name} css={isCurrent && Styles.breadcrumbsCurrent}>
            {href ? <Link href={href}>{name}</Link> : <span>{name}</span>}
          </li>
        ))}
      </ol>
    </nav>
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
