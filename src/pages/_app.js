import "@/styles/globals.css";
import { appWithTranslation } from "next-i18next";
import { AppProvider } from "@/context";
function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
export default appWithTranslation(App);
