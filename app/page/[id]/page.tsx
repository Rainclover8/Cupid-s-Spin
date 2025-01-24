'use client'
import data from "@/data.json";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const category = data.categories[parseInt(id)];

  if (!category) {
    return notFound();
  }

  // Rastgele cevabı tutmak için state
  const [randomAnswer, setRandomAnswer] = useState<string | null>(null);

  useEffect(() => {
    // Sayfa yüklendiğinde rastgele bir cevap seç
    const randomIndex = Math.floor(Math.random() * category.answers.length);
    setRandomAnswer(category.answers[randomIndex]);
  }, [category.answers]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-red-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-600 mb-6">{category.title}</h1>

      {randomAnswer && (
        <div className="bg-yellow-100 text-gray-800 px-6 py-4 rounded-lg text-center text-xl font-semibold mb-6 shadow-lg">
          {randomAnswer}
        </div>
      )}

      <ul className="bg-white shadow-xl p-6 rounded-lg space-y-4">
        {category.answers.map((answer, index) => (
          <li
            key={index}
            className="text-lg font-medium text-gray-700 bg-pink-50 px-4 py-2 rounded-lg"
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
