import React, { useState, useEffect } from "react";
import SampleComponent from "./SampleComponent";
import { GraphQLProviderExample } from "./GraphqlProvider";
function useFetchData() {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  useEffect(() => {
    setStatus("loading");
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setStatus("sucess");
        setData(data);
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);
  return {
    status,
    data,
  };
}
function App() {
  const { status, data: todos } = useFetchData();
  if (status === "loading") {
    return <p>Fetching data</p>;
  }
  if (status === "error") {
    return <p>There was an error fetching the data!</p>;
  }
  console.log(`items:=>`, todos);
  return (
    <div>
      {todos.map((item) => (
        <SampleComponent key={item.id} item={item} />
      ))}
      <GraphQLProviderExample />
    </div>
  );
}

export default App;
