import type { PackageSummary } from "../../api/types/packageSummary";
import { seachPackages } from "../../api/queries/searchPackages";

export interface SeachLoaderResults {
  searchResults: PackageSummary[];
}

export async function searchLoader({
  request,
}: {
  request: Request;
}): Promise<SeachLoaderResults> {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Search term must be provided");
  }

  const results = await seachPackages(term);

  return {
    searchResults: results,
  };
}
