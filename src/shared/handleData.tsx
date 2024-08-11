import { Resource, createResource } from "solid-js";

interface getAPIData {
  [key: string]: any;
}

const fetchData = async (): Promise<object> => {
  /** Simulate a delay */
  await new Promise(resolve => setTimeout(resolve, 300));

  const response = await fetch("./api/data.json");

  if (!response.ok) {
    throw new Error("Network response was not ok (ಥ﹏ಥ)");
  }

  return response.json();
};

const FetchedData = (): Resource<getAPIData> => {
  const [ data ] = createResource(fetchData);
  return data;
};

export default FetchedData;