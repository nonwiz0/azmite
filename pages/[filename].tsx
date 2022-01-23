import { Blocks } from "../components/blocks";
import { ExperimentalGetTinaClient } from "../.tina/__generated__/types";
import { promises as fs } from 'fs'
import path from 'path'

export default function HomePage(
  props: AsyncReturnType<typeof getStaticProps>["props"]
) {
  return <Blocks {...props.data.getPagesDocument.data} />;
}

export const getStaticProps = async ({ params }) => {
  const client = ExperimentalGetTinaClient();
  const tinaProps = await client.ContentQuery({
    relativePath: `${params.filename}.md`,
  });
  return {
    props: {
      ...tinaProps,
    },
  };
};

export const getStaticPaths = async () => {
  console.log(path, process.cwd())
  const client = ExperimentalGetTinaClient();
  const pagesListData = await client.getPagesList();
  return {
    paths: pagesListData.data.getPagesList.edges.map((page) => ({
      params: { filename: page.node.sys.filename },
    })),
    fallback: false,
  };
};

export type AsyncReturnType<T extends (...args: any) => Promise<any>> =
  T extends (...args: any) => Promise<infer R> ? R : any;
