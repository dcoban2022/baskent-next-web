const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Bize Ulaşın
          </h2>
          <p className="text-base text-gray-500">
            Sorularınız için bizimle iletişime geçin
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap">
          {/* Form */}
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-2xl bg-white px-8 py-10 shadow-sm border border-gray-100 lg:mb-5">
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Adınızı ve soyadınızı girin"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 transition"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        E-posta
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="E-posta adresinizi girin"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 transition"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Telefon numaranızı girin"
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 transition"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Mesaj
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Mesajınızı buraya yazın"
                        className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none focus:border-[#0077b6] focus:ring-2 focus:ring-[#0077b6]/20 transition"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-lg bg-[#e63946] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#c1121f]">
                      Gönder
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* İletişim Bilgileri */}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div className="space-y-4">
              {/* Adres */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg className="h-5 w-5 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-gray-900">Adres</h3>
                <p className="text-sm text-gray-500">
                  Işınlar Mah. İvedik Cad. No:2 (Yenimahalle Girişi, İvedik Metro İstasyon Karşısı), Yenimahalle / Ankara
                </p>
              </div>

              {/* Telefon */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg className="h-5 w-5 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
                  </svg>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-gray-900">Telefon</h3>
                <p className="text-sm text-gray-500">
                  Kurum Müdürü:{" "}
                  <a href="tel:05057141668" className="text-[#0077b6] hover:underline">
                    0 (505) 714 16 68
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  Uzman Danışman:{" "}
                  <a href="tel:05335734564" className="text-[#0077b6] hover:underline">
                    0 (533) 573 45 64
                  </a>
                </p>
              </div>

              {/* E-posta */}
              <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                  <svg className="h-5 w-5 text-[#0077b6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="mb-1 text-sm font-semibold text-gray-900">E-posta</h3>
                <a
                  href="mailto:info@baskentdilkonusma.com"
                  className="text-sm text-[#0077b6] hover:underline"
                >
                  info@baskentdilkonusma.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
