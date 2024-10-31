import { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";

import AppTemplate from "../components/templates/AppTemplate";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppTemplate>
      <CssBaseline />
      <Component {...pageProps} />
    </AppTemplate>
  );
};

export default App;
