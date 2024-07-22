"use client";
import { useState } from "react";
import SidebarTest from "@/components/SidebarTest";
import Question from "@/components/Question";
import Link from "next/link";
import Image from "next/image";

const questions = [
  {
    id: 1,
    text: "Nilai Budiman termasuk urutan ke 16 dari atas dan juga urutan ke 16 dari bawah dalam kelasnya. Berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["16 orang", "31 orang", "26 orang", "32 orang"],
  },
  {
    id: 2,
    text: "Sebuah kelas terdiri dari 40 orang siswa. Jika 25% dari siswa tersebut adalah perempuan, berapakah banyaknya siswa laki-laki dalam kelas tersebut?",
    options: ["10 orang", "20 orang", "15 orang", "30 orang"],
  },
  {
    id: 3,
    text: "Jika 2/3 dari jumlah siswa dalam kelas adalah 24 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["36 orang", "32 orang", "30 orang", "40 orang"],
  },
  {
    id: 4,
    text: "Jika 3/4 dari jumlah siswa dalam kelas adalah 36 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["48 orang", "45 orang", "40 orang", "50 orang"],
  },
  {
    id: 5,
    text: "Jika 5/8 dari jumlah siswa dalam kelas adalah 40 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["64 orang", "60 orang", "56 orang", "50 orang"],
  },
  {
    id: 6,
    text: "Jika 3/5 dari jumlah siswa dalam kelas adalah 30 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["50 orang", "45 orang", "40 orang", "55 orang"],
  },
  {
    id: 7,
    text: "Jika 3/7 dari jumlah siswa dalam kelas adalah 21 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["49 orang", "42 orang", "35 orang", "56 orang"],
  },
  {
    id: 8,
    text: "Jika 3/8 dari jumlah siswa dalam kelas adalah 24 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["64 orang", "56 orang", "48 orang", "72 orang"],
  },
  {
    id: 9,
    text: "Jika 2/5 dari jumlah siswa dalam kelas adalah 24 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["60 orang", "50 orang", "40 orang", "70 orang"],
  },
  {
    id: 10,
    text: "Jika 3/4 dari jumlah siswa dalam kelas adalah 36 orang, berapakah banyaknya siswa dalam kelas tersebut?",
    options: ["48 orang", "45 orang", "40 orang", "50 orang"],
  },
];

const Page = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [clearAnswer, setClearAnswer] = useState(false);

  const handleSelectAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleClearAnswer = () => {
    setAnswers((prev) => {
      const newAnswers = { ...prev };
      delete newAnswers[questions[selectedQuestion].id];
      return newAnswers;
    });
  };

  const nextQuestion = () => {
    setSelectedQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const finishQuiz = () => {
    alert("Quiz Finished!");
    // Add any additional logic for finishing the quiz
  };

  return (
    <>
      <nav className="bg-[#EFD2C9] p-8 flex items-center">
        <Image src="/soal.png" width={70} height={70} />
        <div className="items-center mx-3">
          <Link href="/">
            <p className="text-sm">Latihan Pemahaman</p>
          </Link>
          <h3 className="text-lg font-bold text-[rgba(42, 42, 42, 1)]">
            Soal Pilihan Ganda
          </h3>
        </div>
      </nav>
      <div className="flex">
        <div className="flex flex-col lg:flex-row flex-grow">
          <SidebarTest
            questions={questions}
            selectedQuestion={selectedQuestion}
            setSelectedQuestion={setSelectedQuestion}
            answers={answers}
          />
          <div className="flex-grow p-8">
            <Question
              question={questions[selectedQuestion]}
              selectedAnswer={answers[questions[selectedQuestion].id]}
              onSelectAnswer={handleSelectAnswer}
            />
            <button
              className="
              text-red-500
              py-2
              px-4
            "
              onClick={handleClearAnswer}
            >
              Hapus Jawaban
            </button>
            <div className="flex justify-between mt-4">
              {selectedQuestion > 0 && (
                <button
                  className="
                  bg-blue-500
                  text-white
                  py-2
                  px-4
                  rounded-lg
                  hover:bg-blue-600
                  transition
                  duration-200
                  ease-in-out
                  "
                  onClick={() =>
                    setSelectedQuestion((prev) => Math.max(prev - 1, 0))
                  }
                >
                  &lt; Sebelumnya
                </button>
              )}
              {selectedQuestion < questions.length - 1 ? (
                <button
                  className="
                  bg-blue-500
                  text-white
                  py-2
                  px-4
                  rounded-lg
                  hover:bg-blue-600
                  transition
                  duration-200
                  ease-in-out
                  "
                  onClick={nextQuestion}
                >
                  Selanjutnya &gt;
                </button>
              ) : (
                <button
                  className="
                  bg-green-500
                  text-white
                  py-2
                  px-4
                  rounded-lg
                  hover:bg-green-600
                  transition
                  duration-200
                  ease-in-out
                  "
                  onClick={finishQuiz}
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
