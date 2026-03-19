import { useEffect, useState } from "react";
import { DataSet, CreateDataSet } from "../models/DataSetModel";
import { getDataSets, createDataSet, deleteDataSet, updateDataSet } from "../api/DataSetApiService";
import AddDataSetModal from "../components/AddDataSetModal";
import DataSetList from "../components/DataSetList";
import { Button } from "@mui/material";
import DataSetDetails from "./DataSetDetails";

function DataSetCatalog() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [dataSets, setDataSets] = useState<DataSet[]>([]);
  const [selectedDataSet, setSelectedDataSet] = useState<DataSet>();

  async function loadTasks() {
    const data = await getDataSets();
    setDataSets(data);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function handleCreate(dataSet: CreateDataSet) {
    if (dataSet.qualityScore < 1 || dataSet.qualityScore > 100) {
      alert("Quality Score must be between 1 and 100");
      return;
    }

    await createDataSet(dataSet);
    loadTasks();
  }

  async function handleUpdate(dataSet: DataSet) {
    await updateDataSet(dataSet.id, dataSet);

    loadTasks();
  }

  async function handleDelete(id: string) {
    await deleteDataSet(id);
    loadTasks();
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Data Set Manager</h1>
      {selectedDataSet === null || selectedDataSet === undefined ? (
      <>
        <h3>Create Data Set</h3>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setModalOpen(true)}
        >
          Add Dataset
        </Button>

        <AddDataSetModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleCreate}
        />

        <h3>Data Sets</h3>

        <DataSetList datasets={dataSets} onDelete={handleDelete} onEdit={setSelectedDataSet}/>
      </>) : (
      <>
        <h3>Update Data Set</h3>

        <DataSetDetails dataset={selectedDataSet} onBack={() => setSelectedDataSet(undefined)} onSubmit={handleUpdate}/>
      </>)}

      

    </div>
  );
}

export default DataSetCatalog;