/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import "../styles/index.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
