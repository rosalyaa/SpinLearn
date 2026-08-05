import { useState } from "react";

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

        📂 {selectedCategory}

        <span>{open ? "▲" : "▼"}</span>

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