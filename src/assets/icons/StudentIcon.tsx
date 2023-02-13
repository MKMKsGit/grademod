import { SvgIcon, SvgIconProps } from "@mui/material";

const StudentIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M10.0001 8.33333C11.841 8.33333 13.3334 6.84095 13.3334 5C13.3334 3.15905 11.841 1.66666 10.0001 1.66666C8.15913 1.66666 6.66675 3.15905 6.66675 5C6.66675 6.84095 8.15913 8.33333 10.0001 8.33333Z"
        stroke="#5F6368"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 18.3333C17.5 14.1912 14.1421 10.8333 10 10.8333C5.85787 10.8333 2.5 14.1912 2.5 18.3333"
        stroke="#5F6368"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99992 18.3333L11.6666 16.25L9.99992 10.8333L8.33325 16.25L9.99992 18.3333Z"
        fill="white"
        stroke="#5F6368"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};

export default StudentIcon;
