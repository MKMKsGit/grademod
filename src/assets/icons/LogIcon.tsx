import { SvgIcon, SvgIconProps } from "@mui/material";

const LogIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M17.5001 3.65818H2.50008C2.03984 3.65818 1.66675 4.03128 1.66675 4.49151V16.1582C1.66675 16.6184 2.03984 16.9915 2.50008 16.9915H17.5001C17.9603 16.9915 18.3334 16.6184 18.3334 16.1582V4.49151C18.3334 4.03128 17.9603 3.65818 17.5001 3.65818Z"
        stroke="#5F6368"
        strokeWidth="2"
      />
      <path
        d="M10 7.40818V13.2415"
        stroke="#5F6368"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13.3333 10.3248V13.2415"
        stroke="#5F6368"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6.66675 9.49151V13.2415"
        stroke="#5F6368"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </SvgIcon>
  );
};

export default LogIcon;
