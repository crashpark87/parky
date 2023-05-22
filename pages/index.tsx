import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Parkys Second Website</title>
        <meta name="description" content="Welcome to Parkys second website built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="dark-blue">Parkys Second Website</h1>
        
          Welcome to my second website! 
          This site is very cool and everyone else is just jealous.

          <h1 className="title">

  <Link href="/posts/first-post">Test Link One Here!</Link> <br>
  </br>
  <Link href="/posts/contentful-test">Contentful Test Here!</Link>

</h1>

        

        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f5f5f5;
            padding: 2rem;
          }

          h1.dark-blue {
            font-size: 3rem;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 1rem;
          }

          p {
            font-size: 1.5rem;
            line-height: 1.6;
            max-width: 800px;
            text-align: center;
            color: #34495e;
          }
        `}</style>
      </main>
    </div>
  );
}

