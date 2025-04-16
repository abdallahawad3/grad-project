import { useState, useEffect } from "react";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { motion, AnimatePresence } from "framer-motion";
import { Checkbox } from "../ui/checkbox";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Slider } from "../ui/slider";
import { SliderTrack } from "@radix-ui/react-slider";

const contentVariants = {
  open: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    height: 0,
    y: -10,
    transition: { duration: 0.3 },
  },
};

const listItemVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  hover: { scale: 1.01, transition: { duration: 0.2 } },
};

const ProductsSidebar = () => {
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [isOpen4, setIsOpen4] = useState(true);
  const [shouldRender1, setShouldRender1] = useState(false);
  const [shouldRender2, setShouldRender2] = useState(false);
  const [shouldRender3, setShouldRender3] = useState(false);
  const [shouldRender4, setShouldRender4] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 300]);

  useEffect(() => {
    if (isOpen3) {
      setShouldRender3(true);
    }
  }, [isOpen3]);

  const handleExitComplete3 = () => {
    if (!isOpen1) {
      setShouldRender1(false);
    }
  };

  useEffect(() => {
    if (isOpen4) {
      setShouldRender4(true);
    }
  }, [isOpen4]);

  const handleExitComplete4 = () => {
    if (!isOpen4) {
      setShouldRender4(false);
    }
  };
  useEffect(() => {
    if (isOpen1) {
      setShouldRender1(true);
    }
  }, [isOpen1]);

  const handleExitComplete1 = () => {
    if (!isOpen1) {
      setShouldRender1(false);
    }
  };
  useEffect(() => {
    if (isOpen1) {
      setShouldRender2(true);
    }
  }, [isOpen1]);

  const handleExitComplete2 = () => {
    if (!isOpen1) {
      setShouldRender2(false);
    }
  };

  return (
    <aside className="hidden w-1/4 md:block px-5 shadow-lg p-4  border rounded-lg bg-white h-[100%] sticky top-12">
      <div className="space-y-5">
        <RenderList
          title={"All Sizes"}
          list={["Small", "Medium", "Large", "X-Large"]}
          isOpen={isOpen1}
          setIsOpen={setIsOpen1}
          shouldRender={shouldRender1}
          handleExitComplete={handleExitComplete1}
        />
        <hr />
        <RenderList
          title={"All Categories"}
          list={["Clothing", "Shoes", "Accessories"]}
          isOpen={isOpen2}
          setIsOpen={setIsOpen2}
          shouldRender={shouldRender2}
          handleExitComplete={handleExitComplete2}
        />
        <hr />
        <RenderList
          title="Rating"
          list={["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"]}
          isOpen={isOpen4}
          setIsOpen={setIsOpen4}
          shouldRender={shouldRender4}
          handleExitComplete={handleExitComplete4}
        />
        <hr />
        <Collapsible open={isOpen3} onOpenChange={setIsOpen3}>
          <CollapsibleTrigger asChild>
            <motion.button
              className="text-body-lg-500 lg:text-body-lg-500 flex justify-content-between items-center w-[100%]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              style={{
                transform: "none",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p>Price</p>
              <p>{isOpen3 ? <ArrowUp size={18} /> : <ArrowDown size={18} />}</p>
            </motion.button>
          </CollapsibleTrigger>
          <AnimatePresence onExitComplete={handleExitComplete3}>
            {shouldRender3 && (
              <CollapsibleContent asChild forceMount>
                <motion.div
                  key="content"
                  variants={contentVariants}
                  initial="closed"
                  animate={isOpen3 ? "open" : "closed"}
                  exit="closed"
                  className="overflow-hidden"
                >
                  {" "}
                  <div className="flex justify-between my-2 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span>Min: {priceRange[0]}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span>Max: {priceRange[1]}</span>
                    </div>
                  </div>
                  <div className="my-2">
                    <Slider
                      orientation="horizontal"
                      value={priceRange}
                      min={50}
                      max={500}
                      step={1}
                      onValueChange={(value) => setPriceRange(value)}
                      className="w-full"
                    >
                      <SliderTrack className="w-5 h-5 rounded-full bg-blue-500 border border-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300" />
                      <SliderTrack className="w-5 h-5 rounded-full bg-blue-500 border border-white shadow focus:outline-none focus:ring-2 focus:ring-blue-300" />
                    </Slider>
                  </div>
                </motion.div>
              </CollapsibleContent>
            )}
          </AnimatePresence>
        </Collapsible>
      </div>
    </aside>
  );
};

export default ProductsSidebar;

const RenderList = ({
  title,
  list,
  isOpen,
  setIsOpen,
  shouldRender,
  handleExitComplete,
}: {
  title: string;
  list: string[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  shouldRender: boolean;
  handleExitComplete: () => void;
}) => {
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <motion.button
          className="text-body-lg-500 lg:text-body-lg-500 flex justify-content-between items-center w-[100%]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          style={{
            transform: "none",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>{title}</p>
          <p>{isOpen ? <ArrowUp size={18} /> : <ArrowDown size={18} />}</p>
        </motion.button>
      </CollapsibleTrigger>

      <AnimatePresence onExitComplete={handleExitComplete}>
        {shouldRender && (
          <CollapsibleContent asChild forceMount>
            <motion.div
              key="content"
              variants={contentVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              exit="closed"
              className="overflow-hidden"
            >
              <ul className="mt-2 space-y-2">
                {list.map((category, index) => (
                  <motion.li
                    key={index}
                    variants={listItemVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                    className="cursor-pointer px-2 text-gray-800  hover:text-gray-900"
                  >
                    <div className="flex items-center space-x-2 w-[100%]">
                      <Checkbox
                        color="blue"
                        className="custom-checkbox"
                        id={`${category}`}
                        // className="text-blue-700 hover:text-blue-900"
                      />
                      <label
                        htmlFor={`${category}`}
                        className="text-sm cursor-pointer text-gray-900"
                      >
                        {category}
                      </label>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </CollapsibleContent>
        )}
      </AnimatePresence>
    </Collapsible>
  );
};
