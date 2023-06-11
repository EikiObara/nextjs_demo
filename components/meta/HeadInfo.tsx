import { SITE_TITLE } from "../../lib/constants";

const HeadInfo = (): JSX.Element => (
  <>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name={SITE_TITLE}
      content="Learn how to build a personal website using Next.js"
    />
  </>
);

export default HeadInfo;
