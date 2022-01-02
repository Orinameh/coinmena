import { Repository } from "../types";
import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as Caret } from "../assets/caret-down.svg";
import { ReactComponent as Repo } from "../assets/repo.svg";
import { ReactComponent as Fork } from "../assets/fork.svg";

type Props = {
  repositories: Repository[];
};
const Repositories = ({ repositories }: Props) => {
  return <>{
    repositories?.map((repo: Repository) => (
        <article key={repo.url} className="box-row">
          <div className="top">
            <div className="title">
              <a href={repo.url} rel="noreferrer">
                <Repo />
                <span className="title-text">{`${repo.username}/${repo.repositoryName}`}</span>
              </a>
            </div>
            <div className="right-pill">
              <button>
                <Star />
                Star
              </button>
              <button>
                <Caret />
              </button>
            </div>
          </div>
          <p className="middle-text">{repo.description}</p>
          <div className="bottom">
            <div className="bottom-left">
              <span>{repo.language}</span>
              <span>
                <Star />
                {"  "}
                {repo.totalStars.toLocaleString("en-US")}
              </span>
              <span>
                <Fork />
                {"  "}
                {repo.forks.toLocaleString("en-US")}
              </span>
              <span>
                Built by
                <div className="builders">
                  {repo.builtBy?.map((builder) => (
                    <img
                      src={builder.avatar}
                      alt={builder.username}
                      key={builder.username}
                    />
                  ))}
                </div>
              </span>
            </div>
            <div className="bottom-right">
              <Star /> <span>{repo.starsSince} stars today</span>
            </div>
          </div>
        </article>
      ))
  }</>;
};

export default Repositories;
