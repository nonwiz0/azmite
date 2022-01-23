import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../content/global/index.json";
import { Theme } from "./theme";

export const Layout = ({ rawData = "", data = layoutData, children }) => {
  return (
    <>
      <Head>
        <title>Azmo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

      </Head>
      <Theme data={data?.theme}>
        <div className="font-sans hp-rpc">
          <Header data={data?.header} />
          <main>
            {children}
          </main>
          <Footer
            rawData={rawData}
            data={data?.footer}
            icon={data?.header.icon}
          />
        </div>
      </Theme>
    </>
  );
};
