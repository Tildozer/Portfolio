type Props = {
  err: string;
};

const ErrorToast = ({ err }: Props) => {
  return <span className="text-orange-600 dark:text-yellow-500">{err}</span>;
};

export default ErrorToast;
