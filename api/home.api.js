import { request } from "./generic.api";

export const GET_ABOUT = () => request({ url: `about`, method: "PATCH" });

export const GET_HOME = () => request({ url: `home`, method: "PATCH" });

export const GET_NEWS = () => request({ url: `news`, method: "PATCH" });

export const GET_ABOUT_LIMIT = () =>
  request({ url: `projects/all`, method: "POST" });
export const GET_PROJECTS = () => request({ url: `projects`, method: "PATCH" });
export const GET_PROJECT_ONE = ({ data }) =>
  request({ url: `projects/one/${data.projectId}`, method: "POST" });

export const POST_MAIL = ({ data }) =>
  request({ url: `mail`, method: "POST", data: data });

export const GET_GALLERY = () => request({ url: `gallary`, method: "PATCH" });

export const GET_PARTNERS = () => request({ url: `partners`, method: "PATCH" });
