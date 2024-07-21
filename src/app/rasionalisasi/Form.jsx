import React from "react";
import Image from "next/image";

const Form = () => {
  return (
    <Form class="bg-pink-200 flex items-center justify-center min-h-screen">
      <div class="bg-pink-300 p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 class="text-xl font-bold mb-6">Pilih Universitas dan Jurusan</h1>
        <div class="mb-4 text-left">
          <label for="universitas" class="font-semibold mb-2 flex items-center">
            <Image
              src="university-icon.png"
              alt="University Icon"
              class="inline-block mr-2"
            />
            Universitas
          </label>
          <input
            type="text"
            id="universitas"
            placeholder="Cari Universitas/Sekolah Vokasi"
            class="w-full p-2 rounded-lg border border-gray-300"
          />
        </div>
        <div class="mb-6 text-left">
          <label for="jurusan" class="font-semibold mb-2 flex items-center">
            <Image
              src="major-icon.png"
              alt="Major Icon"
              class="inline-block mr-2"
            />
            Pilih Jurusan
          </label>
          <input
            type="text"
            id="jurusan"
            placeholder="Cari Jurusan"
            class="w-full p-2 rounded-lg border border-gray-300"
          />
        </div>
        <div class="flex justify-between">
          <button class="bg-pink-200 text-black py-2 px-4 rounded-lg">
            Kembali
          </button>
          <button class="bg-gray-300 text-black py-2 px-4 rounded-lg">
            Simpan
          </button>
        </div>
      </div>
    </Form>
  );
};

export default Form;