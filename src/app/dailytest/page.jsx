"use client"
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Question from "@/components/Question";
import Link from "next/link";
import Image from "next/image";

const questions = [
  {
    text: "Nilai Budiman termasuk urutan ke 16 dari atas dan juga urutan ke 16 dari bawah dalam kelasnya. Berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["16 orang", "31 orang", "26 orang", "32 orang"],
  },
  {
    text: "Sebuah kelas terdiri dari 40 orang siswa. Jika 25% dari siswa tersebut adalah perempuan, berapakah banyaknya siswa laki-laki dalam kelas tersebut?",
    options: ["10 orang", "20 orang", "15 orang", "30 orang"],
  },
  {
    text: "Jika 2/3 dari jumlah siswa dalam kelas adalah 24 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["36 orang", "32 orang", "30 orang", "40 orang"],
  },
  {
    text: "Jika 3/4 dari jumlah siswa dalam kelas adalah 36 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["48 orang", "45 orang", "40 orang", "50 orang"],
  },
  {
    text: "Jika 5/8 dari jumlah siswa dalam kelas adalah 40 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["64 orang", "60 orang", "56 orang", "50 orang"],
  },
];

const page = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  return (
    <>
      <nav className="bg-[#EFD2C9] p-8 flex items-center">
        <Image src="/soal.png" width={70} height={70} />
        <div className="items-center mx-3">
          <Link href="/">
            <p className="text-sm">Latihan Pemahaman</p>
          </Link>
          <h3 className="text-lg font-bold text-[rgba(42, 42, 42, 1)]">Soal Pilihan Ganda</h3>
        </div>
      </nav>
      <div className="flex">
      <div className="flex flex-col lg:flex-row flex-grow">
        <Sidebar
          questions={questions}
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
        />
        <div className="flex-grow p-8">
          <Question question={questions[selectedQuestion]} />
          <div className="flex justify-between mt-4">
            <button className="text-blue-500">&lt; Sebelumnya</button>
            <button className="text-blue-500">Lihat Leaderboard &gt;</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
