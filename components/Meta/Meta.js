import Head from "next/head"

const Meta = ({ title, icon }) => {
  return (
    <div>
      <Head>
        <meta lang="en"></meta>
        <title>{title}</title>
        <link rel="icon" className="h-12 w-12" href="/logo/lamp.jpg"></link>
        <link href={icon}></link>
      </Head>
    </div>
  );
};

export default Meta