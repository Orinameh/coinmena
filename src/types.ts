export type Repository = {
    username: string;
    repositoryName: string;
    description: string;
    builtBy: Array<{[key: string]: string}>;
    starsSince: number;
    totalStars: number;
    forks: number;
    url: string;
    language: string;

}

export type Developer = {
    avatar: string;
    name: string;
    username: string;
    popularRepository: {[key: string]: string};
    rank: number;

}

export enum Tab {
    REPOSITORIES = "repositories",
    DEVELOPERS = "developers"
}
