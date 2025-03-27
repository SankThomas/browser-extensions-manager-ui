"use client";

import ExtensionCard from "@/components/extensioncard";
import React, { useState } from "react";
import data from "@/lib/data.json";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ModeToggle } from "@/components/modetoggle";

export default function Home() {
  const [filter, setFilter] = useState("All");
  const [extensions, setExtensions] = useState(data);

  const filters = ["All", "Active", "Inactive"];

  const toggleExtension = (name) => {
    setExtensions((prevExtensions) =>
      prevExtensions.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext,
      ),
    );
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "Active") return ext.isActive;
    if (filter === "Inactive") return !ext.isActive;

    return true;
  });

  const removeExtension = (name) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  return (
    <div className="mx-auto min-h-screen max-w-7xl p-8">
      <div className="flex items-center justify-between gap-4 rounded-lg bg-neutral-100 p-4 dark:bg-[#1e1e2c]">
        <h2>
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={150}
            height={10}
          />{" "}
        </h2>

        <ModeToggle />
      </div>

      <div className="my-6 flex flex-wrap items-center justify-between gap-4 rounded-lg">
        <h1 className="text-2xl font-bold">Extensions List</h1>

        <div className="flex space-x-4">
          {filters.map((status) => (
            <Button
              key={status}
              variant={filter === status ? "secondary" : "ghost"}
              onClick={() => setFilter(status)}
            >
              {status}
            </Button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3 } }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredExtensions.length > 0 ? (
            filteredExtensions.map((ext, index) => (
              <ExtensionCard
                key={index}
                {...ext}
                toggleExtension={toggleExtension}
                removeExtension={removeExtension}
              />
            ))
          ) : (
            <CardDescription>No extensions found</CardDescription>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
