import type { PackageDetails } from "../../api/types/packageDetails";
import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";

export interface HomeLoaderResults {
  featuredPackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLoaderResults> {
  const featuredPackages = await getFeaturedPackages();

  return {
    featuredPackages,
  };
}
