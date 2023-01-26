// Generated using "yarn build-templates"

export const meta = {
  name: "Outline Wiki",
  description:
    "A fast, collaborative, knowledge base for your team built using React and Node.js.",
  instructions:
    "Notice, Auththenication Method is Required to use Outline. To use Other Login Methods, Just fill in dummy Cridentials and edit the env! Check out the Docs https://wiki.generaloutline.com/s/hosting/doc/authentication-7ViKRmRY5o! Notice, Some sort of SMTP is Optinal! Check the env Here https://github.com/outline/outline/blob/main/.env.sample",
  changeLog: [{ date: "2023-01-15", description: "first release" }],
  links: [
    { label: "Website", url: "https://www.getoutline.com/" },
    { label: "Documentation", url: "https://www.getoutline.com/developers" },
    { label: "Github", url: "https://github.com/outline" },
  ],
  contributors: [{ name: "DrMxrcy", url: "https://github.com/DrMxrcy" }],
  schema: {
    type: "object",
    required: [
      "projectName",
      "appServiceName",
      "appServiceImage",
      "domainURL",
      "googleClient",
      "googleClientSecret",
      "databaseServiceName",
      "redisServiceName",
      "minioServiceName",
    ],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "outline",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "outlinewiki/outline:0.67.1",
      },
      domainURL: {
        type: "string",
        title: "Domain Url",
        description: "outline.domain.com",
      },
      databaseServiceName: {
        type: "string",
        title: "Database Service Name",
        default: "outline-db",
      },
      redisServiceName: {
        type: "string",
        title: "Redis Service Name",
        default: "outline-redis",
      },
      googleClient: { type: "string", title: "Google Client ID" },
      googleClientSecret: { type: "string", title: "Google Client Secret" },
      minioServiceName: {
        type: "string",
        title: "Minio Service Name",
        default: "outline-minio",
      },
    },
  },
  logo: "logo.png",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;
/**
 * outline.domain.com
 */
export type DomainUrl = string;
export type DatabaseServiceName = string;
export type RedisServiceName = string;
export type GoogleClientID = string;
export type GoogleClientSecret = string;
export type MinioServiceName = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
  domainURL: DomainUrl;
  databaseServiceName: DatabaseServiceName;
  redisServiceName: RedisServiceName;
  googleClient: GoogleClientID;
  googleClientSecret: GoogleClientSecret;
  minioServiceName: MinioServiceName;
}
