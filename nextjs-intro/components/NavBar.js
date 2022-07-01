import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
      {/* in nextJs we don't use anchor(a) bc it makes us to refresh the whole page instead of anchor nextjs is using Link */}
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
          About
        </a>
      </Link>
    </nav>
  );
}
