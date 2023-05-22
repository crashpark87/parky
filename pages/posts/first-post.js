import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
}
