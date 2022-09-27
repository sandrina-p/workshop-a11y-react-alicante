import { css } from "styled-components";

export const header = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const headerTag = css`
  order: -1;
  margin: 0;
`;

export const breadcrumbs = css`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 6px;
  color: var(--theme-text_1);
  font-size: 1.3rem;

  li:not(:last-child) {
    &::after {
      margin-left: 6px;
      content: ">";
      font-weight: 600;
    }
  }

  a {
    color: inherit;
    text-decoration-color: currentcolor;
  }
`;

export const breadcrumbsCurrent = css`
  color: var(--theme-text_0);
  font-weight: 500;
`;

export const plantName = css`
  font-weight: 600;
  text-align: left;
  margin: 0 0 16px;
  font-size: 3.2rem;
  line-height: 1.2;
  margin-bottom: 16px;
`;

// .titleMD {
//   font-size: 1.8rem;
//   font-weight: 600;
//   margin: 0 0 16px;
//   line-height: 1.2;
// }

// .textSM {
//   font-size: 1.4rem;
// }

// /* ------- Header -------  */

// .companyLinks {
//   display: flex;
//   justify-content: center;
//   padding: 32px 0 16px;
//   margin: 0 0 -90px;
// }

// .companyLinks {
//   list-style: none;
//   padding-right: 0;
// }

// .companyLinks a {
//   margin: 0 8px;
// }

// /* ------- Main -------  */

export const tagSecondary = css`
  padding: 2px 4px;
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  background-color: #ffe6d2;
  color: #a75000;
  line-height: 1;
`;

// /* ------- Info -------  */

export const info = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`;

export const infoPart = css`
  flex: 1;
`;

export const topic = css`
  margin: 0;
  padding: 0;

  li {
    display: flex;
    flex-direction: column;
    margin: 0 0 16px;
    padding: 0;
  }
`;

export const topicKey = css`
  font-size: 1.4rem;
  color: var(--theme-text_1);
`;

export const topicValue = css`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;

export const media = css`
  flex-basis: 50%;
  flex-shrink: 0;
`;

export const mediaImg = css`
  max-width: 100%;
`;

// /* ------- Details & CTA -------  */

export const details = css`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  margin-top: 16px;
  border-top: 1px solid var(--theme-primary);

  &:nth-child(2) {
    min-height: 40rem;
  }

  &:nth-child(3) {
    min-height: 20rem;
  }

  &:nth-child(4) {
    min-height: 30rem;
  }
`;

export const placeholder = css`
  background: #eee;
  height: 100%;
  border-radius: 4px;
  flex: 1;
`;

export const price = css`
  line-height: 1;
`;

export const priceOriginal = css`
  text-decoration: line-through;
  opacity: 0.7;
  margin: 0 0 4px;
`;

export const priceFinal = css`
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;

export const btnCta = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  font-size: 1.6rem;
  border: none;
  padding: 8px 24px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  min-width: 170px;
  background-color: var(--theme-primary);
  color: #fff;
  overflow: hidden;

  &:hover {
    filter: brightness(1.3);
  }

  &:focus {
    box-shadow: var(--theme-focus_shadow);
    outline: var(--theme-focus_outline);
  }
`;

export const btnTop = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  font-size: 1.6rem;
  border: none;
  padding: 8px 24px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;
  background-color: var(--theme-primary);
  color: var(--theme-bg_0);
  width: 44px;
  padding: 0;
  border-radius: 50%;

  svg {
    width: 16px;
    fill: currentColor;
  }

  &:hover {
    filter: brightness(1.3);
  }

  &:focus {
    box-shadow: var(--theme-focus_shadow);
    outline: var(--theme-focus_outline);
  }
`;

/* Screen Reader Only
  https://kittygiraudel.com/2021/02/17/hiding-content-responsibly/
*/
export const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
