import PlanRepo from "@/repositories/prodRepos/PlanRepo";
import MealRepo from "@/repositories/prodRepos/MealRepo";

class RepositoryFactory {
  static repos = {
    plans: PlanRepo,
    meals: MealRepo,
  };
  static get(repoName: keyof typeof this.repos) {
    return this.repos[repoName];
  }
}

export default RepositoryFactory;
