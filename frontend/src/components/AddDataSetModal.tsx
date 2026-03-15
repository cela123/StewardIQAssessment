import React, { useState } from "react";
import { CreateDataSet } from "../models/DataSetModel";
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
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CreateDataSet) => void;
}

const AddDataSetModal: React.FC<AddDataSetModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<CreateDataSet>({
    name: "",
    domain: "",
    owner: "",
    qualityScore: 0,
    status: "",
  });

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
    onClose();
    setFormData({
      name: "",
      domain: "",
      owner: "",
      qualityScore: 0,
      status: "",
    });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Dataset</DialogTitle>
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
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddDataSetModal;