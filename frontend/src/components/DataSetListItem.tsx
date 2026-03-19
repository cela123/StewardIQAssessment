import React from "react";
import { ListItem, ListItemText, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataSet } from "../models/DataSetModel";

interface DataSetListItemProps {
  dataset: DataSet;
  onDelete: (id: string) => void;
  onSelect: (dataSet: DataSet) => void;
}

const DataSetListItem: React.FC<DataSetListItemProps> = ({ dataset, onDelete, onSelect }) => {
  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        <IconButton edge="end" color="error" onClick={() => onDelete(dataset.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        onClick={() => onSelect(dataset)}
        primary={`${dataset.name} (${dataset.status})`}
        secondary={
          <>
            <Typography component="span" variant="body2" color="textPrimary">
              Owner: {dataset.owner}
            </Typography>
            {" — Domain: " + dataset.domain}
            {" — Quality Score: " + dataset.qualityScore}
            {dataset.qualityScore < 60 && (
              <Typography component="span" variant="body2" color="error" display="block">
                AI Insight: This dataset may require review.
              </Typography>
            )}
          </>
        }
      />
    </ListItem>
  );
};

export default DataSetListItem;