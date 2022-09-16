import Link from "next/link";
import { linkCSS } from "../../components/Button";

export default function Destiny() {
  return (
    <div>
      <h1>Destiny Page</h1>
      {/*
        🐛 React Router and Next do not support go back using <Link />
        https://stackoverflow.com/questions/72676015/react-router-go-back-using-link
      */}
      {/* <button onClick={() => navigate(-1)} css={linkCSS}>
        Go Back
      </button> */}
      <br />
      <Link href="/" css={linkCSS}>
        Go Home
      </Link>
    </div>
  );
}
