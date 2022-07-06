import Head from "next/head"
import Image from "next/image";

const Meta = ({ title, icon }) => {
  return (
    <div>
      <Head>
        <meta lang="en"></meta>
        <title>{title}</title>
        <link rel="icon"  href="/logo/light.png">
        </link>
        <link href={icon}></link>
      </Head>
    </div>
  );
};

export default Meta