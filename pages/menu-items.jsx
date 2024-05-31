import { motion } from "framer-motion";

export default function MenuItems() {
  return (
    <>
      <motion.div>
        {/* Just a list of the different items by category */}
        <div>
          <h3>Search for menu item</h3>
          <h3>New category</h3>
        </div>
        {/* Overview of the different category added */}
        <div>
          <h3>No category added yet</h3>
          {/* Like dev durable for the steps and questions */}
        </div>
      </motion.div>
    </>
  );
}
