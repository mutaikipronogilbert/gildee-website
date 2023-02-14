import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../layout/layout";
import "../styles/style.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
