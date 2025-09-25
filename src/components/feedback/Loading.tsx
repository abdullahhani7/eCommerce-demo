import type { TLoading } from "@customTypes/shared";

type TLoagingProps = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
};

const Loading = ({ loading, error, children }: TLoagingProps) => {
  if (loading === "pending") {
    return "loading...";
  }
  if (loading === "failed") {
    return error;
  }
  return <>{children}</>;
};

export default Loading;
