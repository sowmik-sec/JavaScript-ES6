const user = {
  id: 506,
  address: {
    village: "Dewanerkhamar",
    post: "Bhurungamari",
    zila: "Kurigram",
  },
  work: [
    { khawa: "3 bela", ghum: "2 bela" },
    { stydy: "3 bela", namaz: "5 bela" },
  ],
  ghoraghuri: "apatoto bondho",
};

console.log(user.address.zila, user.work[1]?.namaz);
