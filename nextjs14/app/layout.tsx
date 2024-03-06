import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";
import RecoilRootProvider from "./context/recoil/recoilRootProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | Movies",
    default: "Loading...",
  },
  description: "The Best movies on the framework",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
