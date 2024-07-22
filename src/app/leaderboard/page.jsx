'use client'
import React, { useState } from 'react';
import Xaviera from "./../../../public/xaviera2.jpg";
import Axel from "./../../../public/axel.jpg";
import Sandy from "./../../../public/sandy.jpg";
import Image from 'next/image';

const participants = [
  { rank: 4, name: 'Sabrina', university: 'Kedokteran Gigi UNNES', score: '80/100' },
  { rank: 5, name: 'Sabrina', university: 'Kedokteran Gigi UNNES', score: '80/100' },
  { rank: 6, name: 'Sabrina', university: 'Kedokteran Gigi UNNES', score: '80/100' },
  { rank: 7, name: 'Sabrina', university: 'Kedokteran Gigi UNNES', score: '80/100' },
  { rank: 8, name: 'Sabrina', university: 'Kedokteran Gigi UNNES', score: '80/100' },
  { rank: 9, name: 'Sabrina', university: 'Kedokteran Gigi UNNES', score: '80/100' },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('nasional');

  const renderContent = () => {
    switch (activeTab) {
      case 'nasional':
        return (
          <>
            <div className="flex space-x-4 mt-6">
              <div className="border-2 border-primary-2 rounded-3xl p-4 flex flex-col items-center w-1/3">
                <div className="w-full h-32 bg-gray-200 rounded-3xl mb-2 overflow-hidden">
                  <Image src={Xaviera} alt="Putri Malika" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <div>Putri Malika</div>
                  <div>Kedokteran UNDIP</div>
                  <div>90/100</div>
                </div>
              </div>
              <div className="border-2 border-primary-2 rounded-3xl p-4 flex flex-col items-center w-1/3">
                <div className="w-full h-32 bg-gray-200 rounded-3xl mb-2 overflow-hidden">
                  <Image src={Sandy} alt="Nando Catur" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <div>Nando Catur</div>
                  <div>Informatika UGM</div>
                  <div>88/100</div>
                </div>
              </div>
              <div className="border-2 border-primary-2 rounded-3xl p-4 flex flex-col items-center w-1/3">
                <div className="w-full h-32 bg-gray-200 rounded-3xl mb-2 overflow-hidden">
                  <Image src={Axel} alt="Nadhin Amizah" className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <div>Nadhin Amizah</div>
                  <div>Informatika UNPAD</div>
                  <div>82/100</div>
                </div>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-200 mt-6">
              <thead className="">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-primary-1">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-primary-2 bg-opacity-80">Nama</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-primary-1">Universitas dan Jurusan</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-primary-2 bg-opacity-80">Nilai</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {participants.map((participant) => (
                  <tr key={participant.rank}>
                    <td className="px-6 py-4 whitespace-nowrap bg-primary-1 bg-opacity-50">{participant.rank}</td>
                    <td className="px-6 py-4 whitespace-nowrap bg-primary-2 bg-opacity-50">{participant.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap bg-primary-1 bg-opacity-50">{participant.university}</td>
                    <td className="px-6 py-4 whitespace-nowrap bg-primary-2 bg-opacity-50">{participant.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        );
      case 'pilihan_pertama':
        return (
          <div className="mt-6">
            <h2 className="text-xl font-bold">Pilihan Pertama Content</h2>
            {/* Add content for Pilihan Pertama here */}
          </div>
        );
      case 'pilihan_kedua':
        return (
          <div className="mt-6">
            <h2 className="text-xl font-bold">Pilihan Kedua Content</h2>
            {/* Add content for Pilihan Kedua here */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <div>1223 Partisipan</div>
      </div>

      <div className="mt-4 flex justify-center space-x-4">
        <button
          className={`px-4 py-2 ${activeTab === 'nasional' ? 'underline' : ''}`}
          onClick={() => setActiveTab('nasional')}
        >
          Nasional
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'pilihan_pertama' ? 'underline' : ''}`}
          onClick={() => setActiveTab('pilihan_pertama')}
        >
          Pilihan Pertama
        </button>
        <button
          className={`px-4 py-2 ${activeTab === 'pilihan_kedua' ? 'underline' : ''}`}
          onClick={() => setActiveTab('pilihan_kedua')}
        >
          Pilihan Kedua
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default Index;
