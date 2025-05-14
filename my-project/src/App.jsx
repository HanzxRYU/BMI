import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (weightKg, heightCm) => {
    if (!weightKg || !heightCm) return null;
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    return parseFloat(bmi.toFixed(2));
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return "Kurus";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Gemuk";
    return "Obesitas";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bmiResult = calculateBMI(parseFloat(weight), parseFloat(height));
    setBmi(bmiResult);
    setCategory(getBmiCategory(bmiResult));
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setCategory("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white font-sans px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Kalkulator BMI</h1>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label className="block mb-1 font-medium">Berat Badan (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Tinggi Badan (cm)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-cyan-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-cyan-600 transition"
            >
              Hitung BMI
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={handleReset}
              className="w-full bg-rose-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-rose-600 transition flex items-center justify-center gap-2"
            >
              <span className="text-lg">↺</span> Reset
            </motion.button>

            <Link to={"/Detail"}>
            <motion.button
              whileHover={{ scale: 1.05, }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="w-full bg-emerald-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-emerald-600 transition flex items-center justify-center p-2"
              >
              <span className="text-lg"></span> Detail Halaman
            </motion.button>
              </Link>
            
          </div>
        </motion.form>

        {bmi !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 p-4 rounded-lg bg-gray-100 text-center"
          >
            <p className="text-xl font-bold text-gray-800">BMI Anda: {bmi}</p>
            <p className="text-md text-cyan-600 font-medium mt-1">
              Kategori: {category}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
