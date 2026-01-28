const questionsDB = {
  math: {
    easy: [
      { q: "2 + 3 = ?", options: ["7","4","6","5"], answer: 2 },
      { q: "10 − 4 = ?", options: ["5","6","7"], answer: 1 },
      { q: "3 × 3 = ?", options: ["13","9","12","6"], answer: 4 },
      { q: "8 ÷ 2 = ?", options: ["8","4","6","2"], answer: 4 },
      { q: "5 + 5 = ?", options: ["9","20","10","11"], answer: 3 }
    ],
    medium: [
      { q: "15 × 4 = ?", options: ["50","60","70"], answer: 1 },
      { q: "√169 = ?", options: ["11","12","13"], answer: 2 },
      { q: "25% of 200?", options: ["25","50","75"], answer: 1 },
      { q: "7² = ?", options: ["42","49","56"], answer: 1 },
      { q: "180 ÷ 12 = ?", options: ["12","15","18"], answer: 1 }
    ],
    hard: [
      { q: "9³ = ?", options: ["729","756","700"], answer: 0 },
      { q: "Derivative of x²?", options: ["x","2x","x²"], answer: 1 },
      { q: "π ≈ ?", options: ["3.12","3.14","3.16"], answer: 1 },
      { q: "√225 = ?", options: ["14","15","16"], answer: 1 },
      { q: "2x² − 3x = 0 ?", options: ["0,3/2","1,2","2,3"], answer: 0 }
    ]
  },

  science: {
    easy: [
      { q: "Water formula?", options: ["H2O","CO2"], answer: 0 },
      { q: "Sun is a?", options: ["Planet","Star"], answer: 1 },
      { q: "We breathe?", options: ["Oxygen","Nitrogen"], answer: 0 },
      { q: "Heart chambers?", options: ["2","4"], answer: 1 },
      { q: "Plants make food by?", options: ["Respiration","Photosynthesis"], answer: 1 }
    ],
    medium: [
      { q: "pH of water?", options: ["5","7","9"], answer: 1 },
      { q: "Gas in photosynthesis?", options: ["O2","CO2"], answer: 1 },
      { q: "SI unit of force?", options: ["Joule","Newton"], answer: 1 },
      { q: "Speed of sound?", options: ["343 m/s","300 m/s"], answer: 0 },
      { q: "Largest organ?", options: ["Skin","Liver"], answer: 0 }
    ],
    hard: [
      { q: "Unit of current?", options: ["Volt","Ampere"], answer: 1 },
      { q: "F = ma law?", options: ["Newton 1st","Newton 2nd"], answer: 1 },
      { q: "Atomic number means?", options: ["Neutrons","Protons"], answer: 1 },
      { q: "DNA full form?", options: ["Deoxyribonucleic Acid","Ribonucleic Acid"], answer: 0 },
      { q: "Chromosome pairs?", options: ["22","23"], answer: 1 }
    ]
  }
};
