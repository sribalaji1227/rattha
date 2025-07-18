type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

interface SimpleApi {
  api: string;
  method: HttpMethod;
}

interface IdApi {
  url: string;
  method: HttpMethod;
  id: string | number | null;
  get api(): string;
}

export const webApis: {
  postContactUsApi: SimpleApi;
  postContactUsWriteApi: SimpleApi;
  getAllBlogById: IdApi;
  getProjectFiltersApi: SimpleApi;
  getProjectsListApi: SimpleApi;
  getBlogsList:SimpleApi;
  getBlogsListById:IdApi;
  postCareerApi: SimpleApi;
} = {
  postContactUsApi: {
    api: "inquiries/add",
    method: "post",
  },
  postContactUsWriteApi: {
    api: "/write-sheet/",
    method: "post",
  },
  getAllBlogById: {
    url: "/blog/",
    method: "get",
    id: null,
    get api() {
      return this.url + this.id;
    },
  },
  getProjectFiltersApi: {
    api: "public/project/filters",
    method: "get",
  },
  getProjectsListApi: {
    api: "public/project/list",
    method: "get",
  },
  getBlogsList:{
    api:"public/blog/list",
    method:"get"
  },
  getBlogsListById: {
  url: "public/blog/list/",
  method: "get",
  id: null,
  get api() {
    return this.url + this.id;
  },
  },
  postCareerApi: {
    api: "careers/submit",
    method: "post",
  },
};
