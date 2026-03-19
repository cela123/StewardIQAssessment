import { DataSet, CreateDataSet } from "../models/DataSetModel";

export async function getDataSets(): Promise<DataSet[]> {
  const response = await fetch("/api/DataSet");

  if (!response.ok) {
    throw new Error("Failed to fetch Data Sets");
  }

  return response.json();
}

export async function createDataSet(dataSet: CreateDataSet): Promise<void> {
  await fetch("/api/DataSet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataSet)
  });
}

export async function updateDataSet(id: string, dataSet: CreateDataSet): Promise<void> {
  await fetch(`/api/DataSet/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataSet)
  });
}

export async function deleteDataSet(id: string): Promise<void> {
  await fetch(`/api/DataSet/${id}`, {
    method: "DELETE"
  });
}