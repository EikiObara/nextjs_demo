import { AppProps } from "next/app";
import "../styles/globals.css";
import AppTemplate from "../components/templates/AppTemplate";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppTemplate>
      <Component {...pageProps} />
    </AppTemplate>
  );
};

export default App;
