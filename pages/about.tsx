import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="w-full mb-9 sm:py-9 text-h4 sm:text-h3 font-sans inline">
        We at{" "}
        <Link href="https://madefor.earth">
          <div className="font-bold hover:underline hover:underline-offset-2 inline">
            Made For <span className="text-green">Earth</span>
          </div>
        </Link>{" "}
        think that a shared source of truth is required to build a better
        future. So we started a glossary of terms, technologies, policies, and
        regulations around climate change. Please help us grow the glossary by{" "}
        <Link href="https://form.typeform.com/to/lowIfjl5">
          <div className="hover:underline hover:underline-offset-2 italic inline">
            recommending missing terms
          </div>
        </Link>{" "}
        or{" "}
        <Link href="https://form.typeform.com/to/hV9yuh6J">
          <div className="hover:underline hover:underline-offset-2 italic inline">
            helping us translate our project
          </div>
        </Link>{" "}
        into more languages.
      </div>
    </Layout>
  );
};

export default AboutPage;
