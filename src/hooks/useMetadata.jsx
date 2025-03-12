// useMetadata.js
import { useEffect } from 'react';
import Head from 'next/head';

const useMetadata = (title, description) => {
  useEffect(() => {
    document.title = `${title} | Turag Waterfront Resort`;
    document.querySelector('meta[name="description"]').setAttribute('content', description);
  }, [title, description]);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default useMetadata;
