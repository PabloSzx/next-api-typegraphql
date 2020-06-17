import { IS_BROWSER } from "@constants";
import { useAsdQuery } from "@graphql";

const IndexPage = () => {
  const [{ data, fetching, error }] = useAsdQuery({
    pause: !IS_BROWSER,
  });

  if (!IS_BROWSER) return null;

  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {fetching ? "Loading..." : JSON.stringify(data ?? error, null, 2)}
    </div>
  );
};

export default IndexPage;
