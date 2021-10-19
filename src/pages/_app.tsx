import "../styles/globals.css";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "../app/store";

export default function MemeGeneratorApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
