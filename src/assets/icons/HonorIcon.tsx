import { SvgIcon, SvgIconProps } from "@mui/material";

const HonorIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M4.5 20L2 8.5L7 11L12 4L17 11L22 8.5L19.5 20H4.5Z"
        fill="white"
        stroke="#4F4F4F"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M12 16.5C13.1045 16.5 14 15.6045 14 14.5C14 13.3954 13.1045 12.5 12 12.5C10.8954 12.5 10 13.3954 10 14.5C10 15.6045 10.8954 16.5 12 16.5Z"
        fill="white"
        stroke="#4F4F4F"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};

export default HonorIcon;
