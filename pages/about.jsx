import Link from 'next/link';
import Head from 'next/head';

const aboutPage = () => (
  <div>
    <Head>
      <title>Gitfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1>About Page of the Gitfolio</h1>
    <Link href="/">
      <a>Go back to index</a>
    </Link>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nunc erat urna, dignissim vel imperdiet nec, lobortis ut neque.
      Sed ornare lacinia mauris eu tempor.
      In sollicitudin est nec sodales facilisis.
      Praesent posuere magna vitae nisi mattis, et pharetra nulla imperdiet.
      Sed lacus massa, feugiat in est vitae, varius luctus erat.
      Aenean eu lobortis metus, vitae maximus ipsum.
      Proin eget sagittis leo, a accumsan dolor.
      Praesent vel libero sit amet magna sagittis porttitor.
      Curabitur id rutrum tortor, nec consequat diam.
      Mauris sed nibh tristique, iaculis ex vitae, feugiat ante.
      Phasellus tempor vulputate imperdiet.
      Vivamus molestie nunc placerat neque pharetra, in tempus nulla pulvinar.
      Proin fermentum erat eros, ut placerat metus sollicitudin nec.
      Cras posuere dui pretium pretium cursus.
      Etiam lobortis sapien et dignissim vestibulum.
  </p>
  </div>
);

export default aboutPage;