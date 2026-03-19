import React, { useState, useMemo } from "react";
import { List, Typography, Paper, Divider } from "@mui/material";
import { DataSet } from "../models/DataSetModel";
import DataSetFilters from "./DataSetFilters";
import DataSetListItem from "./DataSetListItem";

interface DataSetListProps {
  datasets: DataSet[];
  onDelete: (id: string) => void;
  onEdit: (dataSet: DataSet) => void;
}

const DataSetList: React.FC<DataSetListProps> = ({ datasets, onDelete, onEdit }) => {
  const [domainFilter, setDomainFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const domains = useMemo(
    () => Array.from(new Set(datasets.map((d) => d.domain))).filter(Boolean),
    [datasets]
  );

  const filteredDatasets = useMemo(
    () =>
      datasets.filter(
        (d) =>
          (domainFilter ? d.domain === domainFilter : true) &&
          (statusFilter ? d.status === statusFilter : true)
      ),
    [datasets, domainFilter, statusFilter]
  );

  return (
    <Paper elevation={2} style={{ marginTop: 24, padding: 16 }}>
      <Typography variant="h6" gutterBottom>
        Data Sets
      </Typography>

      <DataSetFilters
        domain={domainFilter}
        status={statusFilter}
        domains={domains}
        onDomainChange={setDomainFilter}
        onStatusChange={setStatusFilter}
      />

      {filteredDatasets.length === 0 ? (
        <Typography variant="body1">No datasets match the filters.</Typography>
      ) : (
        <List>
          {filteredDatasets.map((dataset, index) => (
            <React.Fragment key={dataset.id}>
              <DataSetListItem dataset={dataset} onDelete={onDelete} onSelect={onEdit}/>
              {index < filteredDatasets.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default DataSetList;