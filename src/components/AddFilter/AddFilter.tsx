import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import AddRoundedIcon from "@mui/icons-material/AddRounded";

const AddFilter = () => {
  const { t } = useTranslation("filter");
  return (
    <Button
      startIcon={<AddRoundedIcon />}
      sx={{ borderRadius: 1, color: "darkgray", py: 1.5, bgcolor: "white" }}
      size="large"
    >
      {t("addFilter")}
    </Button>
  );
};

export default AddFilter;
