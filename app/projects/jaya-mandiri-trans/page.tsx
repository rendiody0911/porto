"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Database, Layout, Search, Users, Activity, Target, Smartphone, CheckCircle2, Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectDetail() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground relative selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative border-b border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">Web Development</span>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">System Information</span>
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">AI Integration</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 leading-tight">
                Jaya Mandiri Trans: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">Sistem Informasi Penyewaan</span>
              </h1>
              
              <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6 max-w-xl">
                Pengembangan sistem informasi berbasis website untuk mendigitalisasi proses penyewaan bus pariwisata di Kota Bandung. Proyek ini mengintegrasikan booking online, manajemen armada, penjadwalan, hingga rekomendasi AI.
              </p>
              
              <a href="https://www.figma.com/design/nnKWOPAFkdkCgWYaluzZh9/JAYA-MANDIRI-TRANS" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
                <Layout className="w-4 h-4" /> View Figma Prototype
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3, delay: 0.2 }}
            className="order-1 lg:order-2 w-full flex justify-center"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-purple-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/bus_app_mockup.png"
                alt="Jaya Mandiri Trans Mockup"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 px-6 relative">
        <div className="max-w-4xl mx-auto space-y-24">

          {/* 1. Latar Belakang & Permasalahan */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Search className="text-red-400 w-8 h-8" /> 1. Latar Belakang & Permasalahan
            </h3>
            <div className="prose prose-invert max-w-none text-secondary">
              <p>
                Jaya Mandiri Trans merupakan perusahaan penyewaan bus pariwisata di Kota Bandung yang melayani perjalanan wisata, study tour, dan perjalanan perusahaan. Namun, proses bisnis yang berjalan saat ini masih dilakukan secara semi-manual menggunakan <strong>WhatsApp</strong> dan <strong>Microsoft Excel</strong> sehingga menyebabkan proses booking, pembayaran, penjadwalan armada, dan pengelolaan data menjadi kurang efisien.
              </p>
              <h4 className="text-white mt-8 mb-4">6 Permasalahan Utama:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">1. Proses Booking Masih Manual</strong>
                  Pemesanan bus masih dilakukan melalui WhatsApp dan pencatatan jadwal menggunakan Excel sehingga proses menjadi lambat dan berisiko terjadi double booking.
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">2. Verifikasi Pembayaran Tidak Terintegrasi</strong>
                  Admin masih melakukan pengecekan pembayaran secara manual melalui mutasi rekening sehingga konfirmasi lama.
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">3. Penjadwalan Belum Terintegrasi</strong>
                  Penjadwalan armada dan driver masih manual sehingga sering terjadi bentrok jadwal.
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">4. Monitoring Perjalanan Belum Real-Time</strong>
                  Customer tidak dapat memantau lokasi bus secara langsung.
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">5. Pengelolaan Data Kendaraan Manual</strong>
                  Data kendaraan & maintenance tersimpan di beberapa file Excel, sulit dipantau.
                </div>
                <div className="bg-black/20 p-4 rounded-xl border border-white/5">
                  <strong className="text-white block mb-1">6. Laporan Operasional Belum Otomatis</strong>
                  Pembuatan laporan penjualan dan operasional masih manual, tidak real-time.
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Ruang Lingkup & Fitur */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Target className="text-blue-400 w-8 h-8" /> 2. Ruang Lingkup Sistem
            </h3>
            <p className="text-secondary mb-8">
              Sistem informasi berbasis website ini digunakan oleh beberapa aktor utama yaitu: <strong>Customer, Admin, Operational, dan Keuangan</strong>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass p-6 rounded-2xl border-t-4 border-t-blue-500">
                <h4 className="text-xl font-bold text-white mb-3">Create Booking</h4>
                <p className="text-secondary text-sm">
                  Pemesanan bus online oleh customer dengan pengecekan ketersediaan jadwal secara otomatis tanpa risiko bentrok.
                </p>
              </div>
              <div className="glass p-6 rounded-2xl border-t-4 border-t-orange-500">
                <h4 className="text-xl font-bold text-white mb-3">Manage Vehicle</h4>
                <p className="text-secondary text-sm">
                  Pengelolaan armada bus dan pencatatan jadwal maintenance kendaraan secara terpusat oleh tim operasional.
                </p>
              </div>
              <div className="glass p-6 rounded-2xl border-t-4 border-t-green-500">
                <h4 className="text-xl font-bold text-white mb-3">Manage Driver</h4>
                <p className="text-secondary text-sm">
                  Mengelola data driver seperti menambah, mengubah, dan melihat informasi driver yang tersedia beserta jadwalnya.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. Penerapan AI */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Activity className="text-purple-400 w-8 h-8" /> 3. Penerapan Artificial Intelligence (AI)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-purple-500/30 rounded-2xl p-6 bg-purple-900/10">
                <h4 className="text-xl font-bold text-white mb-2">AI Recommendation Bus</h4>
                <p className="text-secondary">
                  Memberikan rekomendasi jenis bus yang paling optimal kepada customer berdasarkan jumlah penumpang dan tujuan perjalanan mereka.
                </p>
              </div>
              <div className="border border-purple-500/30 rounded-2xl p-6 bg-purple-900/10">
                <h4 className="text-xl font-bold text-white mb-2">AI Smart Scheduling</h4>
                <p className="text-secondary">
                  Membantu tim admin dan operasional menentukan jadwal bus dan driver terbaik untuk menghindari terjadinya bentrok jadwal.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 4. Benefit & Tim */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-display font-bold text-primary mb-6 flex items-center gap-3">
              <Users className="text-green-400 w-8 h-8" /> 4. Benefit Perusahaan & Project Team
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-white mb-4">Benefit Untuk Perusahaan</h4>
                <ul className="space-y-3 text-secondary text-sm">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> Meningkatkan efisiensi operasional</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> Mengurangi kesalahan pencatatan data</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> Meminimalkan risiko double booking</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> Mempercepat proses administrasi & pembayaran</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> Memudahkan monitoring secara real-time</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" /> Mempermudah pembuatan laporan bisnis</li>
                </ul>
              </div>
              
              <div className="glass p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Project Team (Kelompok 12)</h4>
                  <ul className="space-y-2 text-secondary text-sm mb-6">
                    <li>• <strong>2702341814</strong> - Syarla Khalilah Utami</li>
                    <li>• <strong>2702374384</strong> - Budi Wijaya</li>
                    <li>• <strong>2702351765</strong> - Rendi Ody</li>
                    <li>• <strong>2702275610</strong> - Felix Hansel William</li>
                  </ul>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs text-gray-400 mb-1">Supervisor / Dosen Pembimbing:</p>
                  <p className="text-sm text-white font-medium">VERONICA, S.Kom., M.M.S.I., PSM I, CDAP (D4900)</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
