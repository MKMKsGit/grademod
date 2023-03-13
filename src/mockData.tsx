import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

type Filter = {
  icon: JSX.Element;
  title: string;
  data: string[];
};

export const getMockFilterData = (t: any): Filter[] => {
  const academicYear = t("filter:academicYear");
  const schoolTypeMain = t("filter:schoolType.main");
  const programMain = t("filter:program.main");
  const schoolTypeAll = t("filter:schoolType.choices.all");
  const schoolTypeGeneral = t("filter:schoolType.choices.general");
  const schoolTypeInter = t("filter:schoolType.choices.inter");
  const schoolTypeVocational = t("filter:schoolType.choices.vocational");
  const schoolTypeForeign = t("filter:schoolType.choices.foreign");

  return [
    {
      icon: <CalendarMonthRoundedIcon />,
      title: academicYear,
      data: ["2564", "2563", "2562"],
    },
    {
      icon: <CalendarMonthRoundedIcon />,
      title: schoolTypeMain,
      data: [
        schoolTypeAll,
        schoolTypeGeneral,
        schoolTypeInter,
        schoolTypeVocational,
        schoolTypeForeign,
      ],
    },
    {
      icon: <CalendarMonthRoundedIcon />,
      title: programMain,
      data: [schoolTypeAll, "CPE", "CPE-INTER", "CPE-HDS", "CPE-RC"],
    },
  ];
};

export const getMockAdmitData = () => {
  return [
    ["School Type", "Inter", "General", "Vocational", "Foreign"],
    ["2014", 600, 400, 200, 100],
    ["2015", 1170, 460, 250, 300],
    ["2016", 660, 1120, 300, 400],
    ["2017", 1030, 540, 350, 500],
  ];
};
