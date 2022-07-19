import Head from 'next/head';

export const Meta = () => {
  return (
    <>
      <Head>
        <title>Pillheads Profiler</title>
        <meta
          name='description'
          content='A sharable profile of the Pillheads NFTs.'
        />
        <meta property='og:title' content='Pillheads Profiler' />
        <meta
          property='og:description'
          content='A sharable profile of the Pillheads NFTs.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};
