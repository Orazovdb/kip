import { request } from "./generic.api";

export const LOGIN = ({ data }) =>
  request({ url: `/auth/signin`, data, method: "post" });

export const ADD_ABOUT = ({ data }) =>
  request({ url: `/about/upsert`, data, method: "post" });
export const DELETE_SLIDER = ({ data }) =>
  request({ url: `/admin/slider/delete`, data, method: "post" });
