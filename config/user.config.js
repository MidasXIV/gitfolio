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

const defaultRepoPreview = "https://user-images.githubusercontent.com/24829816/88103204-c0a65e80-cbb1-11ea-9947-718aae324eb6.png";

export const userRepositories = {
  userRepositoriesResource: `https://api.github.com/users/${userInfo.githubName}/repos`,
  feature: [
    "Design-Patterns-in-TypeScript",
    "GYPSY",
    "hive-greeter",
    "malang",
    "Spatial-Temporal-Analysis-of-Crime"
  ],
  featured: [
    {
      name: "Design-Patterns-in-TypeScript",
      displayName: "Design Patterns in TypeScript",
      preview: "https://user-images.githubusercontent.com/24829816/71924346-3e6fc300-31a8-11ea-8291-158e5afba3f7.png"
    },
    {
      name: "GYPSY",
      displayName: "GYPSY",
      preview: defaultRepoPreview
    },
    {
      name: "hive-greeter",
      displayName: "Hive Greeter",
      preview: "https://user-images.githubusercontent.com/24829816/87224966-7c89b180-c39a-11ea-93c9-5be0c46b96da.png"
    },
    {
      name: "malang",
      displayName: "Anavrin",
      preview: defaultRepoPreview
    },
    {
      name: "Spatial-Temporal-Analysis-of-Crime",
      displayName: "Spatial Temporal Analysis of Crime",
      preview: defaultRepoPreview
    }
  ]
};