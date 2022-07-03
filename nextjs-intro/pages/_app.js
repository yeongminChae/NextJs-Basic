import NavBar from "../components/NavBar";
// _app.js is a blueprint all of our page has to be what components they should have
export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </>
  );
}

// when next js is going to render about page , nextjs will grab the page components and it goes to give that to _app.js
