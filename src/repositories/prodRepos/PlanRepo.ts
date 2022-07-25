import Repository from "@/repositories/Repository";
import { RepositoryResponse } from "@/types";

class PlanRepository extends Repository {
  constructor() {
    const resource = "plans";
    super(resource);
  }
  async getAll(): Promise<Array<RepositoryResponse>> {
    const res = await super.getAll();
    return res;
  }

  set(): RepositoryResponse {
    return {};
  }
}

export default new PlanRepository();
