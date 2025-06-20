'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">
      <section className="relative px-6 py-20 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.jpg"
              alt="Value Care Logo"
              width={150}
              height={150}
              className="rounded-full shadow-md"
            />
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
            Compassionate Home Health Staffing
          </h1>

          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
            We provide certified CNAs, LVNs, DSPs, and RBTs to homes and care facilities across Southern California.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <Image
              src="/nurse-male.png"
              alt="Caregiver and Patient"
              width={300}
              height={300}
              className="rounded-xl shadow-xl"
            />
            <Image
              src="/nurse-smile.jpg"
              alt="Smiling Nurse"
              width={300}
              height={300}
              className="rounded-xl shadow-xl"
            />
            <Image
              src="/nurse-checkup.jpg"
              alt="Health Check"
              width={300}
              height={300}
              className="rounded-xl shadow-xl"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}