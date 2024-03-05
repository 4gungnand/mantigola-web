import Image from "next/image";
import Head from "next/head";
// import Map from '../components/Map';
import "../src/app/globals.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mantigola Village</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white min-h-screen flex flex-col items-center">
        {/* NAVBAR */}
        <nav className="absolute top-0 z-10 w-screen p-4 text-black">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold"> Desa Mantigola</div>              
            <div className="flex space-x-4 rounded-2xl outline-black outline-8 px-4 py-1">
              
            </div>
            <div className="flex space-x-4">
              <a
              className="rounded-xl outline-black outline-8 px-4 py-1"
                href="https://www.instagram.com/warnaiwaktobi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
              className="rounded-xl outline-black outline-8 px-4 py-1"
                href="https://id.wikipedia.org/wiki/Mantigola,_Kaledupa,_Wakatobi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia
              </a>
            </div>
          </div>
        </nav>
        {/* Section 1: Landing page*/}
        <div className="w-screen h-[960px] mx-auto flex items-center relative overflow-hidden mb-10">
          {/* Background Image */}
          <img
            className="object-top object-cover w-screen h-[960px] overflow-hidden"
            src="/1.jpg"
            alt="Desa Mantigola"
          />
          {/* Title */}
          <div>
            <strong className="absolute bottom-90 left-10  text-6xl text-white text-pretty font-bold font-inter mb-8">
              Selamat Datang di{" "}
              <a className="underline decoration-sky-500/100">Desa Mantigola</a>
              .
            </strong>
          </div>
        </div>
        <hr className="w-11/12 mx-auto border-2 border-black mb-10" />
        {/* Section 2: Description of the village */}
        <div className="w-screen mx-auto flex flex-col items-center overflow-hidden mb-10">
          <div className="text-6xl font-bold font-inter text-black mb-8">
            Apa itu Desa Mantigola?
          </div>
          {/* Background Image */}
          <div className="overflow-hidden w-screen flex">
            <div className="relative w-1/3">
              <img
                className="object-cover w-full h-[960px]"
                src="/2.jpg"
                alt="Desa Mantigola"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70">
                <p className="py-10 px-20 text-2xl text-black font-inter text-justify">
                  Desa Mantigola adalah sebuah desa unik yang terletak di
                  Sulawesi Tenggara.
                </p>
              </div>
            </div>
            <div className="relative w-1/3">
              <img
                className="object-cover w-full h-[960px]"
                src="/3.jpg"
                alt="Desa Mantigola"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70">
                <p className="py-10 px-20 text-2xl text-black font-inter text-justify">
                  Desa ini menawarkan keindahan alam yang menakjubkan dan budaya
                  yang kental.
                </p>
              </div>
            </div>
            <div className="relative w-1/3">
              <img
                className="object-cover w-full h-[960px]"
                src="/4.jpg"
                alt="Desa Mantigola"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-70">
                <p className="py-10 px-20 text-2xl text-black font-inter text-justify">
                  Desa yang terletak di atas air ini seluruhnya dihuni oleh suku
                  Bajau. Letak desa ini berada di perairan laut di barat Pulau
                  Kaledupa, di atas gugusan terumbu karang yang telah mati. SD
                  Negeri Mantigola berada di desa ini.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-11/12 mx-auto border-2 border-black mb-10" />
        {/* Section 3: Additional Information */}
        <div className="w-screen h-[960px] mx-auto flex justify-center flex-col items-center text-center">
          <div className="text-6xl font-bold font-inter text-black mb-8">
            Geografi
          </div>
          <p className="text-2xl font-inter text-black mb-8">
            Secara lebih spesifik, desa ini terletak di Kecamatan Kaledupa,
            Kabupaten Wakatobi, Provinsi Sulawesi Tenggara, Indonesia.
          </p>
          <img
            className="object-cover object-center overflow-hidden"
            src="/6.jpg"
            alt="Lokasi Desa Mantigola"
          />
        </div>
        {/* Section 4: Demografi */}
      </main>
    </div>
  );
}
