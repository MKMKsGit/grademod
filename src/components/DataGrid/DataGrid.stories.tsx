import { ComponentMeta } from "@storybook/react";
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default {
  title: "DataGrid",
  component: DataGrid,
} as ComponentMeta<typeof DataGrid>;

const rows: GridRowsProp = [
  { id: 1, lastName: "Snow", firstName: "Jon" },
  { id: 2, lastName: "Lannister", firstName: "Cersei" },
  { id: 3, lastName: "Lannister", firstName: "Jaime" },
];

const columns: GridColDef[] = [
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
];

export const DataGridStory = (args: DataGridProps) => (
  <Box sx={{ height: 400, width: "100%" }}>
    <DataGrid autoHeight {...args} />
  </Box>
);
DataGridStory.args = {
  rows,
  columns,
};

DataGridStory.storyName = "DataGrid";
