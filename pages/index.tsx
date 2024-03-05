import Image from 'next/image';
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

      <main className="max-w-4xl mx-auto p-8">
        {/* Section 1 */}
        <section className="relative mb-8">
          {/* Title */}
          <h1 className="text-center text-6xl font-bold mb-4 font-inter">
            Welcome to Mantigola Village
          </h1>
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              className="object-cover"
              src="/2.jpg"
              alt="Mantigola Village"
              width={1920}
              height={1080}
            />
          </div>
          {/* Content */}
          <div className="relative z-10 text-white font-inter">
            <p className="mb-4">
              Mantigola adalah sebuah desa yang menarik yang terletak di Sulawesi
              Tenggaraa. Desa ini menawarkan keindahan alam yang menakjubkan dan
              budaya yang kental. Secara lebih spesifik, desa ini terletak di
              Kecamatan Kaledupa, Kabupaten Wakatobi, Provinsi Sulawesi Tenggara,
              Indonesia. Desa yang terletak di atas air ini seluruhnya dihuni oleh
              suku Bajau. Letak desa ini berada di perairan laut di barat Pulau
              Kaledupa, di atas gugusan terumbu karang yang telah mati. SD Negeri
              Mantigola berada di desa ini.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2 font-inter">Location</h2>
            <p>Mantigola Village is located here:</p>
            {/* <Map /> */}
          </div>
          <Image src="/6.jpg" alt="Description of Image" width={500} height={500}/>
        </section>
      </main>
    </div>
  );
}
