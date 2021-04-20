// eslint-disable-next-line no-use-before-define
import React from 'react';
import Head from 'next/head';

export default function Layout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string
}) {
  return (
    <div className="bg">
      <Head>
        <title>
          {title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {children}

      <style jsx>
        {`
          .bg {
           background-image: url('images/background.webp');
           background-repeat: no-repeat;
           background-position: center;
           background-size: cover;
           z-index: 10;
          }
      `}
      </style>
    </div>
  );
}
