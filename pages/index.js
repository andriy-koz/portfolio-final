import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>KOZ Dev | Desarrollo web y marketing digital</title>
        <meta
          name='description'
          content='Desarrollo web y marketing digital | Web development and digital marketing'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Main />
    </>
  );
}
