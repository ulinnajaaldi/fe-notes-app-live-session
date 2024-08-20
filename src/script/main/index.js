const main = () => {
  const blogs = [
    {
      id: 1,
      title: "Cara Memulai Belajar Pemrograman",
      body: "Panduan untuk pemula yang ingin memulai belajar pemrograman.",
    },
    {
      id: 2,
      title: "Tips Efektif dalam Pengembangan Web",
      body: "Tips dan trik untuk menjadi pengembang web yang lebih baik.",
    },
    {
      id: 3,
      title: "Mengenal Konsep Web Component",
      body: "Pengenalan singkat tentang Web Component dan komponen-komponennya.",
    },
    {
      id: 4,
      title: "Mengenal Konsep React.js",
      body: "Pengenalan singkat tentang React.js dan komponen-komponennya.",
    },
    {
      id: 5,
      title: "Panduan Penggunaan Vue.js",
      body: "Pengenalan singkat tentang Vue.js dan komponen-komponennya.",
    },
    {
      id: 6,
      title: "Belajar Bahasa Pemrograman Python",
      body: "Cara mudah memulai belajar bahasa pemrograman Python.",
    },
  ];

  const notesListElement = document.querySelector("notes-list");
  notesListElement.setNotesList(blogs);

  const FormElement = document.querySelector("#form-notes");

  FormElement.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Halo aku dari main");
  });
};

export default main;
