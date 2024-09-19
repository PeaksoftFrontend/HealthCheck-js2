import { Select } from "./components/UI/Select";

export const App = () => {
  const name = [
    {
      label: "aziret",
    },
    {
      label: "aza",
    },
    {
      label: "azi",
    },
  ];
  return (
    <div>
      <h1>Healthcheck</h1>
      <Select options={name} placeholder={"kfajdshf"} label={"akfjdhsfha"} />
    </div>
  );
};
