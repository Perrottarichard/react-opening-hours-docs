import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HorizontalExample from "./horizontal_opening_hours.png";
import Ts from "./icons8-typescript-48.png";
import Js from "./icons8-javascript-48.png";

import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src={Ts} style={{ borderRadius: "24px" }} />
        <img src={Js} style={{ borderRadius: "24px" }} />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Tutorial - 5min ⏱️
          </Link>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <div
              style={{
                height: "300px",
                width: "200px",
                marginTop: 12,
                marginBottom: 12,
                marginRight: 12,
                marginLeft: 12,
              }}
            >
              <img
                src={VerticalExample}
                alt="example react opening hours"
                style={{ borderRadius: "12px" }}
              />
            </div> */}
            <div
              style={{
                height: "300px",
                width: "300px",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <img
                src={HorizontalExample}
                alt="example react opening hours"
                style={{ borderRadius: "12px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
