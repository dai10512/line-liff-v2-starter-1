import "../styles/globals.css";
import { useState, useEffect } from "react";
import liff from "@line/liff";

function MyApp({ Component, pageProps }) {
  const [liffObject, setLiffObject] = useState(null);
  const [liffError, setLiffError] = useState(null);
  const [idToken, setIdToken] = useState(null);
  const [name, setName] = useState('');

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    async function initializeLiff() {
      console.log("start liff.init()...");
      liff.init({
        liffId: process.env.LIFF_ID, // Use own liffId
      }).then(() => {
      // const idToken = liff.getIDToken();
      // const decodedIDToken = liff.getDecodedIDToken();
      // const name = decodedIDToken.name;
      // setName(name);
      setIdToken(liff.getIDToken());
      setLiffObject(liff);
      console.log("liff.init() done");
    }).catch((err) => {
        // 初期化失敗時の処理
        setLiffError(err);
        console.error('LIFF Initialization failed', err);
    });
    
      // liff
      //   .init({
      //     liffId: "2005512074-GxA2NAJQ", // Use own liffId
      //   })
      //   .then(async () => {
      //     await liff.init({ liffId: "2005512074-GxA2NAJQ" });
      //     console.log("liff.init() done");
  
      //     const idToken = liff.getIDToken();
      //     const decodedIDToken = liff.getDecodedIDToken();
      //     console.log("decodedIDToken: " + JSON.stringify(decodedIDToken));
      //     console.log("idToken: " + idToken);
  
      //     setLiffObject(liff);        })
      //   .catch((err) => {
      //     // Error happens during initialization
      //     console.log(err.code, err.message);
      //   });

      // try {
      //   await liff.init({ liffId: "2005512074-GxA2NAJQ" });
      //   console.log("liff.init() done");

      //   const idToken = liff.getIDToken();
      //   const decodedIDToken = await liff.getDecodedIDToken();
      //   console.log("decodedIDToken: " + JSON.stringify(decodedIDToken));
      //   console.log("idToken: " + idToken);

      //   setLiffObject(liff);
      // } catch (error) {
      //   console.error(`liff.init() failed: ${error}`);
        
      //   if (!process.env.LIFF_ID) {
      //     console.info(
      //       "LIFF Starter: Please make sure that you provided `LIFF_ID` as an environmental variable."
      //     );
        // }
        
        // setLiffError(error.toString());
      // }
    }

    initializeLiff();
  }, []);

  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  pageProps.idToken = idToken;
  return <Component {...pageProps} />;
}

export default MyApp;
