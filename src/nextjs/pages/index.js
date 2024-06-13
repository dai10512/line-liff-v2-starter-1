import Head from "next/head";
import packageJson from "../package.json";

export default function Home(props) {

  const { liff, liffError, idToken} = props;

  return (
    <div>
      <Head>
        <title>LIFF Starter</title>
      </Head>
      {/* idtoken表示 */}
      <p>ID Token: {idToken ? idToken : "ID Token is not available"}</p>
      <p>id token: {idToken}</p>
      {/* LIFFの初期化エラー表示 */}
      {liffError && <p>LIFF Error: {liffError.toString()}</p>}
      {/* LIFFの初期化が成功した場合 */}
      {liff && (
        <div>
          <p>LIFF is initialized</p>
          <p>LIFF SDK Version: {liff.getVersion()}</p>
          <p>LIFF Language: {liff.getLanguage()}</p>

        </div>
      )}
    </div>
  );
}

