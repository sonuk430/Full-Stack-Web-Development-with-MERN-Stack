import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils";

const Items = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });
  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: "1rem" }}>Error...</p>;
  }

  // console.log(error);

  // if (error) {
  //   return <p style={{ marginTop: "1rem" }}>{error.response.data}...</p>;
  // }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            // removeItem={removeItem}
            // editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
