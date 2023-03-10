import { createTheme } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";

export const dataGridTheme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          minHeight: 138,
          height: "100%",
        },
        columnHeaders: {
          borderRadius: "12px 12px 0 0",
          backgroundColor: "hsla(0, 0%, 96%, 1)",
        },
        columnHeader: {
          padding: "12px 18px 12px 16px",
        },
        cell: {
          padding: "18px 16px",
        },
        columnHeaderTitle: {
          fontWeight: 600,
        },
      },
      defaultProps: {
        autoHeight: true,
        columnHeaderHeight: 48,
        pageSizeOptions: [10, 25, 50, 100],
      },
    },
  },
});
