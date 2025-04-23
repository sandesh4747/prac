import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

// export default function MenuItem({ item }) {
//   const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
//   const handleToggleChildren = (currentLabel) => {
//     setDisplayCurrentChildren({
//       ...displayCurrentChildren,
//       [currentLabel]: !displayCurrentChildren[currentLabel],
//     });
//   };
//   return (
//     <li>
//       <div className="menu-item">
//         <p>{item.label}</p>
//         {item && item.children && item.children.length ? (
//           <span onClick={() => handleToggleChildren(item.label)}>
//             {displayCurrentChildren[item.label] ? (
//               <FaMinus color="#fff" size={25} />
//             ) : (
//               <FaPlus color="#fff" size={25} />
//             )}
//           </span>
//         ) : null}
//       </div>
//       {item &&
//       item.children &&
//       item.children.length > 0 &&
//       displayCurrentChildren[item.label] ? (
//         <MenuList list={item.children} />
//       ) : null}
//     </li>
//   );
// }

export default function MenuItem({ item }) {
  const [showChildren, setShowChildren] = useState(false);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>

        {item.children?.length > 0 && (
          <span onClick={() => setShowChildren(!showChildren)}>
            {showChildren ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        )}
      </div>

      {showChildren && item.children?.length > 0 && (
        <div>
          <MenuList list={item.children} />{" "}
        </div>
      )}
    </li>
  );
}
