import "../styles/globals.css";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { EtherProvider } from "../context/Ethere";

const MyApp = ({ Component, pageProps }) => (
  <EtherProvider>
    <div className="position">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  </EtherProvider>
);

export default MyApp;
