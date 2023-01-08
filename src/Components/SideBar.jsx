import { categories } from "../utils/constants";
import { Stack, Typography } from "@mui/material";

const SideBar = ({ categorySelected, setCategorySelected }) => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      width: { sm: "100%" },
      height: { sm: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === categorySelected && "#FC1503",
          color: "white",
        }}
        key={category.name}
        onClick={() => {
          setCategorySelected(category.name);
        }}
      >
        <span
          style={{
            color: category.name === categorySelected ? "white" : "#fc1503",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <Typography
          variant="body1"
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            opacity: category.name === categorySelected ? "1" : "0.7",
          }}
        >
          {category.name}
        </Typography>
      </button>
    ))}
  </Stack>
);

export default SideBar;
