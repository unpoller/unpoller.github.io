import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        UniFi Poller was designed from the ground up to be flexibly installed.
        It's a simpe tool that provides a wealth of valuable data.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        UniFi Poller lets you concentrate on what is happening in your network
        in an intuitive and visual way.
      </>
    ),
  },
  {
    title: 'Powered by Golang',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Built using powerful tools like Golang, with data stored in InfluxDB or
        Prometheus and presented using ready-to-go Grafana dashboards!
      </>
    ),
  },
/*  {
    title: 'Compatibility',
    imageUrl: 'img/?.svg',
    description: (
      <>
        UniFi Poller can be installed on Linux, FreeBSD, macOS, Windows, Docker,
        and you can even run it right from your home folder.
      </>
    ),
  }, */
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Go Lift: ${siteConfig.title}`}
      description="Telemetry and Observability for your UniFi Network">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/introduction')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
