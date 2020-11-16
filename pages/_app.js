import '../styles/global.css'
export default function App({ Component, pageProps }) {
  console.log(pageProps,'kllll')
  return <Component {...pageProps} />
}