import { Developer } from "../types";
import { ReactComponent as Popular } from "../assets/popular.svg";
import { ReactComponent as Repo } from "../assets/repo.svg";



type Props = {
  developers: Developer[];
};
const Developers = ({ developers }: Props) => {
  return <>{
    developers?.map((developer: Developer) => (
        <article key={developer.rank} className="box-row-dev">
            <p>{developer.rank}</p>
            <img src={developer.avatar} alt={developer.avatar} />
            <div className="user-details">
                <h4>{developer.name}</h4>
                <p>{developer.username}</p>
            </div>
            <div className="popular">
                <span className="popular-top">
                    <Popular />
                    POPULAR REPO
                </span>
                <span className="popular-middle">
                    <Repo />
                    {developer?.popularRepository?.repositoryName}
                </span>
                <p>{developer?.popularRepository?.description}</p>
            </div>
            <button> Follow </button>
        </article>
      ))
  }</>;
};

export default Developers;