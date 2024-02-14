import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  // the hook which returns the current path
  // usePathname only works in Client components, Add the 'use-client' directive at the top of the file
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path == "/" ? "👍🏻" : ""}
        </li>
        <li>
          <Link href="/about-us">About-Us</Link>{" "}
          {path == "/about-us" ? "👍🏻" : ""}
        </li>
      </ul>
    </nav>
  );
}
