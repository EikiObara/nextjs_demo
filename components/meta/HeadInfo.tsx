import { SITE_TITLE } from "../../consts";

const HeadInfo = (): JSX.Element => (
  <>
    <link rel="icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <meta
      name={SITE_TITLE}
      content="Learn how to build a personal website using Next.js"
    />
  </>
);

export default HeadInfo;
