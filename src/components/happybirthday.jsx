import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';

const Happy_birthday = () => {
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false); // Confetes param após 5 segundos
        }, 5000);

        return () => clearTimeout(timer); // Limpa o efeito após 5 segundos
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-400 to-blue-600 text-white p-4">
            {showConfetti && <Confetti />}

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                className="text-center fade-in"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 glow">
                    Feliz Aniversário, Amigo, você é um Amigo!
                </h1>
                <p className="text-lg md:text-2xl">
                    Você sempre me ensinou os valores da perseverança e foco nos estudos,
                    e acima de tudo como ser engraçado e como ser um bom amigo.
                </p>
            </motion.div>

            {/* Seção de fotos */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Foto principal do amigo atualmente */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src="/assets/images/main.jpeg" // Substitua pelo caminho da foto
                            alt="Amigo hoje"
                            className="w-full object-cover h-64"
                        />
                    </motion.div>

                    {/* Fotos de infância */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.1 }}
                        className="rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src="/assets/images/together1.jpeg" // Caminho da primeira foto juntos
                            alt="Nós quando crianças"
                            className="w-full object-cover h-64"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src="/assets/images/together2.jpeg" // Caminho da segunda foto juntos
                            alt="Nós quando crianças"
                            className="w-full object-cover h-64"
                        />
                    </motion.div>

                    {/* Fotos do seu amigo sozinho quando criança */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, delay: 0.3 }}
                        className="rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src="/assets/images/young1.jpeg" // Caminho da primeira foto do amigo sozinho
                            alt="Amigo criança 1"
                            className="w-full object-cover h-64"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src="/assets/images/young2.jpeg"
                            alt="Amigo criança 2"
                            className="w-full h-64 object-contain"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="mt-12 text-lg"
            >
                <p>Tu é foda mano! Já alcançou grandes coisas na tua vida, e com
                    certeza vai alcançar maiores feitos ainda. Nunca se esqueça que
                    podes sempre contar comigo! Do seu amigo: Dante. 🎉</p>
            </motion.footer>
        </div>
    );
};

export default Happy_birthday;