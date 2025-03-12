// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { X } from "lucide-react";

// export const SliderModal = ({ item, uniqueId, itemArr }) => {
//   console.log(item, uniqueId, itemArr);
//   const [isOpen, setIsOpen] = useState(false);
//   const [newItem, setNewItem] = useState(item);
//   const [constraints, setConstraints] = useState(0);
//   const carousel = useRef(null);

//   // Set the drag constraints dynamically
//   useEffect(() => {
//     const element = carousel.current;
//     if (element) {
//       const viewportHeight = element.offsetHeight;
//       const viewScrollHeight = element.scrollHeight;
//       setConstraints(viewportHeight - viewScrollHeight); // Update the constraints
//     }
//   }, [carousel, isOpen]);

//   // Handle escape key for closing the modal
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [isOpen]);

//   return (
//     <>
//       <motion.div
//         onClick={() => {
//           setIsOpen(true);
//           setNewItem(item); // Ensure the correct image is displayed initially
//         }}
//         className="overflow-hidden mb-3"
//       >
//         <motion.div layoutId={uniqueId}>
//           <Image
//             width={400}
//             height={400}
//             src={`https://api.turagwaterfrontresort.com${item?.image}`}
//             className="bg-white text-black rounded-md w-full cursor-zoom-in"
//             alt="img"
//           />
//         </motion.div>
//       </motion.div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-gray-300/80 dark:bg-black/80 backdrop-blur-lg"
//             onClick={() => {
//               setIsOpen(false);
//               setNewItem(null);
//             }}
//           >
//             <button
//               className="absolute top-2 right-2 p-4 text-white bg-gray-400/40 dark:bg-black/80 backdrop-blur-lg"
//               onClick={() => setIsOpen(false)}
//             >
//               <X />
//             </button>

//             {/* Image Modal */}
//             <motion.div
//               layoutId={uniqueId}
//               className="rounded-md w-fit h-[80%] flex gap-2 items-center mx-auto cursor-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {newItem && (
//                 <motion.figure className="dark:bg-gray-900/40 bg-gray-100/40 border rounded-md p-4">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{
//                       opacity: 1,
//                       transition: { duration: 0.3, ease: "easeInOut" },
//                     }}
//                     exit={{
//                       opacity: 0,
//                       transition: { duration: 0.2, ease: "easeInOut" },
//                     }}
//                   >
//                     <Image
//                       src={`https://api.turagwaterfrontresort.com${newItem.image}`}
//                       width={1000}
//                       height={1000}
//                       alt="preview_img"
//                       className="object-contain h-[70vh] mx-auto rounded-md"
//                     />
//                   </motion.div>
//                 </motion.figure>
//               )}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { X } from "lucide-react";

// export const SliderModal = ({ item, uniqueId, itemArr }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [newItem, setNewItem] = useState(item);
//   const [constraints, setConstraints] = useState(0);
//   const carousel = useRef(null);

//   // Recalculate drag constraints whenever the modal is open
//   useEffect(() => {
//     const element = carousel.current;
//     if (element) {
//       const viewportHeight = element.offsetHeight;
//       const viewScrollHeight = element.scrollHeight;
//       setConstraints(viewportHeight - viewScrollHeight);
//     }
//   }, [carousel, isOpen]);

//   // Disable body scroll when modal is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }
//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, [isOpen]);

//   return (
//     <>
//       <motion.div
//         onClick={() => {
//           setIsOpen(true);
//           setNewItem(item); // Set new item when opening modal
//         }}
//         className="overflow-hidden mb-3"
//       >
//         <motion.div layoutId={uniqueId}>
//           <Image
//             width={400}
//             height={400}
//             src={`https://api.turagwaterfrontresort.com${item?.image}`}
//             className="bg-white text-black rounded-md w-full cursor-zoom-in"
//             alt="img"
//           />
//         </motion.div>
//       </motion.div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center w-full h-screen bg-gray-300/80 dark:bg-black/80 backdrop-blur-lg"
//             onClick={() => {
//               setIsOpen(false);
//               setNewItem(null);
//             }}
//           >
//             <button
//               className="absolute top-2 right-2 p-4 text-white bg-gray-400/40 dark:bg-black/80 backdrop-blur-lg"
//               onClick={() => setIsOpen(false)}
//             >
//               <X />
//             </button>

//             {/* Modal Image */}
//             <motion.div
//               layoutId={uniqueId}
//               className="rounded-md w-fit h-[80%] flex gap-2 items-center mx-auto cursor-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               {newItem && (
//                 <motion.figure className="dark:bg-gray-900/40 bg-gray-100/40 border rounded-md p-4">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{
//                       opacity: 1,
//                       transition: { duration: 0.3, ease: "easeInOut" },
//                     }}
//                     exit={{
//                       opacity: 0,
//                       transition: { duration: 0.2, ease: "easeInOut" },
//                     }}
//                   >
//                     <Image
//                       src={`https://api.turagwaterfrontresort.com${newItem.image}`}
//                       width={1000}
//                       height={1000}
//                       alt="preview_img"
//                       className="object-contain h-[70vh] mx-auto rounded-md"
//                     />
//                   </motion.div>
//                 </motion.figure>
//               )}
//             </motion.div>

//             {/* Carousel for other images */}
//             <motion.div
//               className="h-[500px] overflow-y-scroll dark:bg-gray-900/40 bg-white/40 border rounded-md"
//               ref={carousel}
//             >
//               <motion.div
//                 whileDrag={{ scale: 0.95 }}
//                 dragElastic={0.2}
//                 dragTransition={{ bounceDamping: 30 }}
//                 transition={{ duration: 0.2, ease: "easeInOut" }}
//                 drag="y"
//                 dragConstraints={{ top: 0, bottom: constraints }}
//               >
//                 {/* Check if itemArr exists and map over it */}
//                 {itemArr && itemArr.length > 0 ? (
//                   itemArr.map((itemData) => (
//                     <motion.div
//                       key={itemData.id}  // Using unique ID for better performance
//                       className="relative p-2 cursor-grab active:cursor-grabbing"
//                       onClick={() => setNewItem(itemData)}
//                     >
//                       <Image
//                         src={`https://api.turagwaterfrontresort.com${itemData.image}`}
//                         width={400}
//                         height={400}
//                         alt="img"
//                         className="sm:w-48 w-52 h-24 object-cover cursor-pointer relative z-[2] rounded-md"
//                       />
//                       {itemData?.id === newItem?.id && (
//                         <motion.div
//                           layoutId="slider"
//                           transition={{
//                             layout: { duration: 0.2, ease: "easeOut" },
//                           }}
//                           className="absolute top-0 left-0 h-full w-full dark:bg-gray-100 bg-gray-800 rounded-md"
//                         />
//                       )}
//                     </motion.div>
//                   ))
//                 ) : (
//                   <div className="text-center text-white">No items available</div>
//                 )}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export const SliderModal = ({ item, uniqueId, itemArr }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newItem, setNewItem] = useState(item);
  const [constraints, setConstraints] = useState(0);
  const carousel = useRef(null);

  // Recalculate drag constraints whenever the modal is open
  useEffect(() => {
    const element = carousel.current;
    if (element) {
      const viewportHeight = element.offsetHeight;
      const viewScrollHeight = element.scrollHeight;
      setConstraints(viewportHeight - viewScrollHeight);
    }
  }, [carousel, isOpen]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <motion.div
        onClick={() => {
          setIsOpen(true);
          setNewItem(item); // Set new item when opening modal
        }}
        className="overflow-hidden mb-3"
      >
        <motion.div layoutId={uniqueId}>
          <Image
            width={400}
            height={400}
            src={`https://api.turagwaterfrontresort.com${item?.image}`}
            className="bg-white text-black rounded-md w-full cursor-zoom-in"
            alt="img"
          />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col md:flex-row  items-center justify-center w-full h-screen bg-gray-300/80 dark:bg-black/80 backdrop-blur-lg"
            onClick={() => {
              setIsOpen(false);
              setNewItem(null);
            }}
          >
            <button
              className="absolute top-2 right-2 p-4 text-white bg-gray-400/40 dark:bg-black/80 backdrop-blur-lg"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>

            {/* Modal Image */}
            <motion.div
              layoutId={uniqueId}
              className="rounded-md w-fit h-[80%] flex gap-2 items-center mx-auto cursor-auto"
              onClick={(e) => e.stopPropagation()} // Stop propagation for modal image click
            >
              {newItem && (
                <motion.figure className="dark:bg-gray-900/40 bg-gray-100/40 border rounded-md p-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.2, ease: "easeInOut" },
                    }}
                  >
                    <Image
                      src={`https://api.turagwaterfrontresort.com${newItem.image}`}
                      width={1000}
                      height={1000}
                      alt="preview_img"
                      className="object-contain h-[70vh] mx-auto rounded-md"
                    />
                  </motion.div>
                </motion.figure>
              )}
            </motion.div>

            <motion.div
              className="h-[350px] md:h-[500px]  md:overflow-y-scroll dark:bg-gray-900/40 rounded-md"
              ref={carousel}
            >
              <motion.div
                whileDrag={{ scale: 0.95 }}
                dragElastic={0.2}
                dragTransition={{ bounceDamping: 30 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                drag="x" // Horizontal drag for mobile scroll
                dragConstraints={{ left: 0, right: constraints }} // Limit the drag area horizontally
                className="grid grid-cols-4 gap-2 md:grid-cols-1 px-2 mt-4" // Use w-max to ensure the grid doesn't wrap
              >
                {/* Check if itemArr exists and map over it */}
                {itemArr && itemArr.length > 0 ? (
                  itemArr.map((itemData, idx) => (
                    <motion.div
                      key={idx} // Unique ID for better performance
                      className="relative p-2 cursor-grab active:cursor-grabbing"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent closing the modal
                        setNewItem(itemData); // Set new image when clicked
                      }}
                    >
                      <Image
                        src={`https://api.turagwaterfrontresort.com${itemData.image}`}
                        width={400}
                        height={400}
                        alt="img"
                        className="w-[80px] sm:w-[120px] md:w-[150px] h-auto object-cover cursor-pointer relative z-[2] rounded-md" // Adjust image width for mobile and desktop
                      />
                      {itemData?.id === newItem?.id && (
                        <motion.div
                          layoutId="slider"
                          transition={{
                            layout: { duration: 0.2, ease: "easeOut" },
                          }}
                          className="absolute top-0 left-0 h-full w-full dark:bg-gray-100 bg-[#f2f2f2] rounded-md"
                        />
                      )}
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center text-white">
                    No items available
                  </div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
