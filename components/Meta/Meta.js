import Head from "next/head"

const Meta = ({ title, icon }) => {
  return (
    <div>
      <Head>
        <meta lang="en"></meta>
        <title>{title}</title>
        <link href={icon}></link>
      </Head>
    </div>
  );
};

export default Meta