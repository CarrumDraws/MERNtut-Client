import { Box } from "@mui/material";
import { useSelector } from "react-redux";
// Profile Picture Component
const UserImage = ({ image, size = "60px" }) => {
  const url = useSelector((state) => state.url);
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${url}/assets/${image}`}
      />
    </Box>
  );
};
export default UserImage;
