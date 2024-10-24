"use client";
import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
  return (
    <div className="">
      <NextStudio config={config} />
    </div>
  );
}
