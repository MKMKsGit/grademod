import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const rows: GridRowsProp = [
  {
    id: 1,
    schoolName: "School 1",
    schoolType: "Type 1",
    province: "Province 1",
    totalStudent: 100,
  },
  {
    id: 2,
    schoolName: "School 2",
    schoolType: "Type 2",
    province: "Province 2",
    totalStudent: 200,
  },
  {
    id: 3,
    schoolName: "School 3",
    schoolType: "Type 3",
    province: "Province 3",
    totalStudent: 300,
  },
  {
    id: 4,
    schoolName: "School 4",
    schoolType: "Type 4",
    province: "Province 4",
    totalStudent: 400,
  },
  {
    id: 5,
    schoolName: "School 5",
    schoolType: "Type 5",
    province: "Province 5",
    totalStudent: 500,
  },
  {
    id: 6,
    schoolName: "School 6",
    schoolType: "Type 6",
    province: "Province 6",
    totalStudent: 600,
  },
  {
    id: 7,
    schoolName: "School 7",
    schoolType: "Type 7",
    province: "Province 7",
    totalStudent: 700,
  },
  {
    id: 8,
    schoolName: "School 8",
    schoolType: "Type 8",
    province: "Province 8",
    totalStudent: 800,
  },
  {
    id: 9,
    schoolName: "School 9",
    schoolType: "Type 9",
    province: "Province 9",
    totalStudent: 900,
  },
  {
    id: 10,
    schoolName: "School 10",
    schoolType: "Type 10",
    province: "Province 10",
    totalStudent: 1000,
  },
  {
    id: 11,
    schoolName: "School 11",
    schoolType: "Type 11",
    province: "Province 11",
    totalStudent: 1100,
  },
];

const SchoolTable = () => {
  const { t } = useTranslation("school");
  const headers: string[] = t("table.headers", { returnObjects: true });

  const columns: GridColDef[] = [
    { field: "schoolName", headerName: headers[0], flex: 1 },
    { field: "schoolType", headerName: headers[1], flex: 1 },
    { field: "province", headerName: headers[2], flex: 1 },
    {
      field: "totalStudent",
      headerName: headers[3],
      flex: 1,
      renderCell: (params) => {
        return params.value.toLocaleString();
      },
    },
  ];

  return (
    <Box height={"95%"}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{ mt: 3 }}
        autoPageSize
        autoHeight={false}
      />
    </Box>
  );
};

export default SchoolTable;
