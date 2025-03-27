import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { CardDescription } from "./ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExtensionCard({
  logo,
  name,
  description,
  isActive,
  toggleExtension,
  removeExtension,
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.3 } }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      className="flex flex-col justify-between rounded-lg bg-neutral-100 p-4 shadow-md dark:bg-[#1e1e2e]"
    >
      <div>
        <div className="mb-4 flex items-center gap-4">
          <Image
            src={logo}
            alt={name}
            width={600}
            height={600}
            className="size-10 rounded-xl"
          />

          <h3 className="text-lg font-semibold">{name}</h3>
        </div>

        <CardDescription>{description}</CardDescription>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button variant="ghost" onClick={() => removeExtension(name)}>
          Remove
        </Button>
        <Switch
          checked={isActive}
          onCheckedChange={() => toggleExtension(name)}
        />
      </div>
    </motion.div>
  );
}
