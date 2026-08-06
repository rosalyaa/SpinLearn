import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const categoryIcons = {

  "Tech": "💻",

  "Physics": "💈",

    "Finance": "💰",

    "Forensics": "🔎",

};
function CategoryDropdown({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="dropdown-selected"
        onClick={() => setOpen(!open)}
      >
        {categoryIcons[selectedCategory]} {selectedCategory}

        {open ? (
          <FiChevronUp className="dropdown-icon" />
        ) : (
          <FiChevronDown className="dropdown-icon" />
        )}
      </div>

      {open && (
        <div className="dropdown-menu">
          {categories.map((category) => (
            <div
              key={category}
              className="dropdown-item"
              onClick={() => {
                setSelectedCategory(category);
                setOpen(false);
              }}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryDropdown;