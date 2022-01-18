import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "../styles/globals.css";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  );
}

export default MyApp;
