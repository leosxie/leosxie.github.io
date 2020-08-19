import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main className="main-index">
        <Link
          className={clsx(
            "button button--outline button--secondary button--lg",
            styles.getStarted
          )}
          to={useBaseUrl("docs/linux/ssh")}
        >
          今日主题：【使用秘钥登录服务器】
        </Link>
      </main>
    </Layout>
  );
}

export default Home;
