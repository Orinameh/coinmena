import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import "../styles/trending.css";
import { Developer, Repository, Tab } from "../types";
import Repositories from "../components/Repositories";
import Developers from "../components/Developers";

const Trending = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const [repositories, setRepositories] = useState<Array<Repository>>([]);
  const [developers, setDevelopers] = useState<Array<Developer>>([]);

  useEffect(() => {
    if (location.search === "") {
      setTab(Tab.REPOSITORIES);
    } else {
      setTab(Tab.DEVELOPERS);
    }
  }, [location.search]);

  const fetchGithubData = useCallback(
    () =>
      fetch(
        `https://corsanywhere.herokuapp.com/https://gh-trending-api.herokuapp.com/${tab}`
      ).then((res) => res.json()),
    [tab]
  );

  const { isLoading, error, data } = useQuery(["github", tab], fetchGithubData);

  useEffect(() => {
    if (data) {
      if (tab === Tab.REPOSITORIES) {
        setRepositories(data);
      }
      if (tab === Tab.DEVELOPERS) {
        setDevelopers(data);
      }
    }
  }, [data, tab]);

  if (isLoading) {
    return <div className="white-text">Loading...</div>;
  }

  if (error) {
    return <div className="white-text">An Error has occurred</div>;
  }

  return (
    <>
      <section className="trending-hero">
        <h1>Trending</h1>
        <p>See what the GitHub community is most excited about today.</p>
      </section>

      <section className="trending-content">
        <div className="content-header">
          <nav className="content-header-left">
            <Link
              className={tab === Tab.REPOSITORIES ? "active" : ""}
              to={location.pathname}
            >
              Repositories
            </Link>
            <Link
              className={tab === Tab.DEVELOPERS ? "active" : ""}
              to={`${location.pathname}?tab=developers`}
            >
              Developers
            </Link>
          </nav>
          <div className="content-header-right">
            {tab === Tab.REPOSITORIES && (
              <details>
                <summary className="summary">
                  Spoken Language:
                  <span>English</span>
                </summary>
              </details>
            )}
            <details>
              <summary className="summary">
                Language:
                <span>Any</span>
              </summary>
            </details>
            <details>
              <summary className="summary">
                Date Range:
                <span>Today</span>
              </summary>
            </details>
          </div>
        </div>
        <div>
          {tab === Tab.REPOSITORIES && <Repositories repositories={repositories} />}
          {tab === Tab.DEVELOPERS && <Developers developers={developers} />}

        </div>
      </section>
    </>
  );
};

export default Trending;
