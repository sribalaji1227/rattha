import { webApis } from "service/apiVariables";
import { errorToast } from "@/helpers/utis";
import { api } from "@/service/api";
import { Toast } from "@/service/toast";

export async function contactUs(body: Record<string, unknown>): Promise<any> {
  try {
    const data = await api({
      ...webApis.postContactUsApi,
      body,
    });
    Toast({ type: "success", message: (data as any).message });
    return data;
  } catch (error: any) {
    errorToast(error.message);
    throw error;
  }
}

export async function postCareer(body: Record<string, unknown>): Promise<any> {
  try {
    const data = await api({
      ...webApis.postCareerApi,
      body,
    });
    Toast({ type: "success", message: (data as any).message });
    return data;
  } catch (error: any) {
    errorToast(error.message);
    throw error;
  }
}

export async function getProjectFilters(): Promise<any> {
  try {
    const data = await api({
      ...webApis.getProjectFiltersApi,
    });
    Toast({ type: "success", message: "Filter options fetched successfully" });
    return data;
  } catch (error: any) {
    errorToast(error.message);
    throw error;
  }
}


export async function getProjectsList(filters?: Record<string, any>): Promise<any> {
  try {
    const queryParams = new URLSearchParams();
    const appliedFilters = filters || {};

    if (appliedFilters.cities?.length) queryParams.append("city", appliedFilters.cities.join(","));
    if (appliedFilters.status?.length) queryParams.append("status", appliedFilters.status.join(","));
    if (appliedFilters.budget?.length) queryParams.append("budget", appliedFilters.budget.join(","));
    if (appliedFilters.types?.length) queryParams.append("types", appliedFilters.types.join(","));
    if (appliedFilters.newLaunches) queryParams.append("isNewLaunch", "true");
    if (appliedFilters.amenities?.length) queryParams.append("amenities", appliedFilters.amenities.join(","));
    if (appliedFilters.area?.[0] > 0) queryParams.append("minArea", appliedFilters.area[0].toString());
    if (appliedFilters.area?.[1] < 1000) queryParams.append("maxArea", appliedFilters.area[1].toString());


    const queryString = queryParams.toString();
    const url = queryString
      ? `${webApis.getProjectsListApi.api}?${queryString}`
      : webApis.getProjectsListApi.api;

    const data = await api({
      ...webApis.getProjectsListApi,
      api: url, 
    });
    return data;
  } catch (error: any) {
    errorToast(error.message);
    throw error;
  }
}



export async function getBlogsList(): Promise<any> {
  try {
    const data = await api({
      ...webApis.getBlogsList,
    });
    return data;
  } catch (error: any) {
    errorToast(error.message);
    throw error;
  }
}

export async function getBlogById(id: string): Promise<any> {
  try {
    webApis.getBlogsListById.id = id;
    const data = await api({
      ...webApis.getBlogsListById,
    });
    return data;
  } catch (error: any) {
    console.error("Blog fetch failed", error);
    throw error;
  }
}


