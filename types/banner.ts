export interface Banner {
    _id: string,
    url: string,
    banner: string,
    status: boolean,
    createdAt: string,
    updatedAt: string,
    type: string
  }
  
  export interface BannerList {
    banners: Banner[]
  }
  
  export interface FetchAllBannersResult {
    data: Banner[] | null;
    error: string | null;
  }
  
  
  