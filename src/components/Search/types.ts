export type TSearchContProps = {
  handleChange: (search: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  search: string;
};
