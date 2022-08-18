import Head from 'next/head';

const logo =
  'https://res.cloudinary.com/saimano/image/upload/v1660824147/Pillheads/banner_yuqafa.jpg';

export const Meta = () => {
  return (
    <>
      <Head>
        <title>Pillheads Profiler</title>
        <meta
          name='description'
          content='A sharable profile for your Pillheads NFTs.'
        />
        <meta property='og:title' content='Pillheads Profiler' />
        <meta
          property='og:description'
          content='A sharable profile for your Pillheads NFTs.'
        />

        <meta property='og:image' content={logo} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Pillheads Profiler' />
        <meta
          name='twitter:description'
          content='A sharable profile for your Pillheads NFTs.'
        />
        <meta name='twitter:image' content={logo} />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};
