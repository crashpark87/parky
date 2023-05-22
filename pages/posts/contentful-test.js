const client = require('../contentful-client');
export async function getStaticProps() {
    const entries = await client.getEntries({
      content_type: 'blogPost',
    });
  
    return {
      props: {
        content: entries.items[0],
      },
      revalidate: 60,
    };
  }
  function About({ content }) {
    return (
      <div>
        <h1>{content.fields.title}</h1>
        <p>{content.fields.description}</p>
      </div>
    );
  }
  