import axios, { AxiosRequestConfig } from "axios";
import { RepositoryResponse } from "@/types";

abstract class Repository {
  protected readonly resource: string;
  protected readonly baseUrl = "/api/";
  protected readonly baseConfig: AxiosRequestConfig;
  protected readonly axios;

  constructor(resource: string) {
    this.resource = resource;
    this.baseConfig = {
      baseURL: this.baseUrl,
    };
    this.axios = axios.create(this.baseConfig);
  }

  async get(resourceId: number): Promise<RepositoryResponse> {
    const res = await this.axios.get(`${this.resource}/${resourceId}`);
    return res.data;
  }
  async getAll(): Promise<Array<RepositoryResponse>> {
    const res = await this.axios.get(this.resource);
    return res.data;
  }
  abstract set(): RepositoryResponse;
}

export default Repository;
