import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    //Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Complete internal logic encapsulation allows you to simply give and get
        the values you need in a specified format
      </>
    ),
  },
  {
    title: "Customizable",
    description: (
      <>
        Swap native elements for custom components or 3rd party components using
        render props
      </>
    ),
  },
  {
    title: "Multiple Styling Strategies",
    description: (
      <>
        Unstyled with Zero dependencies out-of-the-box. Target{" "}
        <code>classNames</code> or <code>styles</code> to fit your use case.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
