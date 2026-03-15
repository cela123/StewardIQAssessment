export interface DataSet {
  id: string;
  name: string;
  domain: string;
  owner: string;
  qualityScore: number;
  status: string;
}

export interface CreateDataSet {
  name: string;
  domain: string;
  owner: string;
  qualityScore: number;
  status: string;
}