import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUser(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <h3>github users</h3>
      <ul className="users">
        {user.map((user) => {
          return (
            <li key={user.id}>
              {user.login}
              <img src={user.avatar_url} />
              <a href={user.html_url}>Profile</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
