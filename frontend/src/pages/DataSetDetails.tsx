import React, { useState } from "react";
import { CreateDataSet, DataSet } from "../models/DataSetModel";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

interface AddDataSetModalProps {
  dataset: DataSet;
  onBack: () => void;
  onSubmit: (data: DataSet) => void;
}

const AddDataSetModal: React.FC<AddDataSetModalProps> = ({
  dataset,
  onBack,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<DataSet>(dataset);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "qualityScore" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onBack();
  };

  return (
    <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <TextField
            margin="normal"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            margin="normal"
            label="Domain"
            name="domain"
            value={formData.domain}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="normal"
            label="Owner"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="normal"
            label="Quality Score"
            name="qualityScore"
            type="number"
            value={formData.qualityScore}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="normal"
            label="Status"
            name="status"
            select
            value={formData.status}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="needsReview">Needs Review</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={onBack}>Back</Button>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </DialogActions>
      </form>
  );
};

export default AddDataSetModal;