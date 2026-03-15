import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

interface DataSetFiltersProps {
  domain: string;
  status: string;
  domains: string[];
  onDomainChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const DataSetFilters: React.FC<DataSetFiltersProps> = ({
  domain,
  status,
  domains,
  onDomainChange,
  onStatusChange,
}) => {
  return (
    <Box display="flex" gap={2} mb={2}>
      <FormControl fullWidth>
        <InputLabel>Domain</InputLabel>
        <Select value={domain} label="Domain" onChange={(e) => onDomainChange(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          {domains.map((d) => (
            <MenuItem key={d} value={d}>
              {d}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select value={status} label="Status" onChange={(e) => onStatusChange(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="approved">Approved</MenuItem>
          <MenuItem value="needsReview">Needs Review</MenuItem>
          <MenuItem value="rejected">Rejected</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default DataSetFilters;