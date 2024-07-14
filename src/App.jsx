import React, { useState, useEffect } from "react";
import Repo from "./Repo";

function App() {
  //fetch API
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [repoId, setRepoId] = useState(0);

  useEffect(() => {
    const fetchRepo = async () => {
      let url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;

      try {
        const res = await fetch(url);

        const datas = await res.json();

        const repoArray = datas.map((data, index) => ({
          id: repoId + index,
          name: data.name,
          visibility: data.visibility,
          description: data.description,
          topics: data.topics,
        }));

        //console.log(repoArray[1].id);
        if (page === 1) {
          setRepos(() => [...repoArray]);
        } else {
          setRepos((prevRepos) => [...prevRepos, ...repoArray]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRepo();
  }, [page]);

  const addMoreBoxes = () => {
    setPage((prevPage) => prevPage + 1);
    setRepoId((prevRepoId) => prevRepoId + 5);
  };

  return (
    <>
      <div className="wrapper">
        <div className="box-container">
          {repos.map((repo) => (
            <Repo
              key={repo.id}
              name={repo.name}
              visibility={repo.visibility}
              description={repo.description}
              topics={repo.topics}
            />
          ))}
        </div>
        <button className="more" onClick={addMoreBoxes}>
          More
        </button>
      </div>
    </>
  );
}

export default App;
