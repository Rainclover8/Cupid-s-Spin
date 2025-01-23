"use client";

import data from "@/data.json";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [datas] = useState(data);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-red-100 to-purple-200 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500 mb-8">Aşk Kategorileri</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.categories.map((category, index) => (
          <Link
            key={index}
            href={`/page/${index}`}
            className="bg-white shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 p-6 rounded-lg text-center"
          >
            <h2 className="text-xl font-semibold text-gray-700">{category.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
