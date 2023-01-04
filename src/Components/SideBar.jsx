import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

const SideBar = ({ categorySelected, setCategorySelected }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
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
        <span
          style={{ opacity: category.name === categorySelected ? "1" : "0.7" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
