import React from "react";
import { Link } from "react-router-dom";

function Detail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 text-white px-4">
      <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
          Informasi Detail BMI
        </h1>

        <div className="space-y-4 text-gray-800">
          <div>
            <h2 className="text-xl font-semibold text-purple-600">Kurus</h2>
            <p>BMI di bawah 18.5. Anda mungkin perlu menambah asupan kalori dan memperhatikan asupan nutrisi.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-600">Normal</h2>
            <p>BMI antara 18.5 dan 24.9. Berat badan Anda ideal, pertahankan gaya hidup sehat.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-yellow-500">Gemuk</h2>
            <p>BMI antara 25 dan 29.9. Anda mungkin memiliki kelebihan berat badan, pertimbangkan olahraga teratur.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-red-500">Obesitas</h2>
            <p>BMI 30 ke atas. Disarankan konsultasi dengan profesional kesehatan untuk rencana penurunan berat badan.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/">
            <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition">
              Kembali ke Kalkulator
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;
