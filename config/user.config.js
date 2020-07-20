import Repositories from "../pages/repositories";

export const userInfo = {
  name: "Aman Shaikh",
  role: "Full Stack Software Engineer",
  bio: "Self-motivated developer, who is willing to learn and create outstanding UI applications.",
  githubName: "MidasXIV"
};

export const userEducation = {

};

export const userExperience = {

};

export const UserRepositoriesResource = `https://api.github.com/users/${userInfo.githubName}/repos`;

export const userFeaturedRepositories = [
  "Design-Patterns-in-TypeScript",
  "GYPSY",
  "hive-greeter",
  "malang",
  "Spatial-Temporal-Analysis-of-Crime"
];