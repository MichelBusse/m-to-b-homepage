import Head from "next/head";
import BlogEntry from "@/components/BlogEntry";
import { getAllPostIds, getPostData } from "../../lib/posts";


export default function BlogEntryPage({ postData } : { postData : any }) {

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <link
          rel="alternate"
          hrefLang="de"
          href={"https://m-to-b.com/Blog/" + postData.id}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={"https://m-to-b.com/en/Blog/" + postData.id}
        />
        <title key="title">{postData.title + ` - M-to-B - ${currentYear}`}</title>
        <meta name="description" content={postData.contentHtml} />
      </Head>
      <main>
        <BlogEntry
          title={postData.title}
          content={postData.contentHtml}
          image={postData.image}
        />
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths: paths.flatMap((path) => [{params: {id: path}, locale: 'de'}, {params: {id: path}, locale: 'en'}]),
    fallback: false,
  };
}

export async function getStaticProps({ params, locale } : { params: any, locale : any }) {
  const postData = await getPostData(params.id, locale);
  return {
    props: {
      postData,
    },
  };
}
