import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tour from "./components/Tour";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const updateTours = tours.filter((tour) => tour.id !== id);
    setTours(updateTours);
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://www.course-api.com/react-tours-project",
    );
    const data = await response.json();
    setTours(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  {
    if (tours.length === 0) {
      return (
        <div>
          <h2>No Tours Left</h2>
          <button
            onClick={() => {
              fetchData();
            }}
          >
            Refresh
          </button>
        </div>
      );
    }
  }

  return (
    <section className="main">
      {/* <div> */}
      <h2>our tours</h2>
      <hr />
      {/* </div> */}
      {/* {isLoading && <Loading />} */}
      <section className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </section>
    </section>
  );
};

export default App;
