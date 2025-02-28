const questions = [
  // Number Series
  {
    id: 1,
    topic: "Number Series",
    question: "What is the next number in the sequence: 3, 9, 27, 81, ?",
    options: [162, 243, 324, 729],
    answer: 243,
    explanation: "Each term is multiplied by 3, so the next number is 81 × 3 = 243.",
  },
  {
    id: 2,
    topic: "Number Series",
    question: "Find the missing number: 2, 5, 10, 17, ?",
    options: [24, 26, 27, 30],
    answer: 26,
    explanation: "Pattern: n² + 1, so 5² + 1 = 26.",
  },

  // Speed, Time & Distance
  {
    id: 3,
    topic: "Speed, Time & Distance",
    question: "A car covers 200 km in 4 hours. What is its speed in km/hr?",
    options: [40, 50, 55, 60],
    answer: 50,
    explanation: "Speed = Distance / Time, so 200/4 = 50 km/hr.",
  },
  {
    id: 4,
    topic: "Speed, Time & Distance",
    question: "A train is 150m long and crosses a bridge of length 250m in 20 seconds. What is its speed in m/s?",
    options: [20, 25, 30, 35],
    answer: 20,
    explanation: "Total distance = 150 + 250 = 400m, Speed = 400/20 = 20 m/s.",
  },

  // Simple Interest & Compound Interest
  {
    id: 5,
    topic: "Simple Interest",
    question: "A sum of money doubles itself in 5 years. What is the rate of interest per annum?",
    options: [10, 15, 20, 25],
    answer: 20,
    explanation: "Using the Rule of 72: 72/5 = 20% interest per year.",
  },
  {
    id: 6,
    topic: "Simple Interest",
    question: "A sum of money becomes $880 in 2 years at 10% per annum. Find the principal amount.",
    options: [700, 720, 800, 820],
    answer: 800,
    explanation: "Using SI formula: P = A / (1 + (r×t)/100) = 880 / (1 + (10×2)/100) = 800.",
  },

  // Profit & Loss
  {
    id: 7,
    topic: "Profit & Loss",
    question: "A shopkeeper offers a discount of 20% on an item priced at $500. What is the selling price?",
    options: [380, 400, 420, 450],
    answer: 400,
    explanation: "20% of 500 = 100, so the price after discount = 500 - 100 = $400.",
  },
  {
    id: 8,
    topic: "Profit & Loss",
    question: "A man sells an item for $600 with a profit of 20%. Find the cost price.",
    options: [450, 500, 550, 580],
    answer: 500,
    explanation: "Cost price = Selling price / (1 + Profit%), so 600 / 1.2 = 500.",
  },

  // Work & Wages
  {
    id: 9,
    topic: "Work & Wages",
    question: "If 15 workers can complete a task in 10 days, how long will 30 workers take?",
    options: [3, 4, 5, 6],
    answer: 5,
    explanation: "Work is inversely proportional, so 15×10 = 30×X, solving for X = 5 days.",
  },

  // Average
  {
    id: 10,
    topic: "Averages",
    question: "The average of five numbers is 48. If four numbers are 50, 46, 52, and 44, find the fifth number.",
    options: [46, 48, 50, 52],
    answer: 48,
    explanation: "Sum of 5 numbers = 48 × 5 = 240. Fifth number = 240 - (50+46+52+44) = 48.",
  },

  // Geometry
  {
    id: 11,
    topic: "Geometry",
    question: "If the perimeter of a square is 48 cm, what is its area?",
    options: [100, 121, 144, 256],
    answer: 144,
    explanation: "Side = 48/4 = 12, so area = 12² = 144 cm².",
  },
  {
    id: 12,
    topic: "Geometry",
    question: "A rectangular plot has a length of 20m and width of 15m. Find its area.",
    options: [200, 250, 300, 350],
    answer: 300,
    explanation: "Area = length × width = 20 × 15 = 300 m².",
  },

  // Logical Reasoning
  {
    id: 13,
    topic: "Logical Reasoning",
    question: "Find the odd one out: 5, 10, 15, 20, 26, 30",
    options: [10, 15, 20, 26],
    answer: 26,
    explanation: "All are multiples of 5 except 26.",
  },
  {
    id: 14,
    topic: "Logical Reasoning",
    question: "What is the next term in the sequence: 1, 1, 2, 3, 5, 8, ?",
    options: [10, 11, 13, 15],
    answer: 13,
    explanation: "Fibonacci sequence: 1+1=2, 1+2=3, 2+3=5, 3+5=8, so next is 5+8=13.",
  },

  // Direction Sense
  {
    id: 15,
    topic: "Direction Sense",
    question: "A man walks 20m north, then 30m east, then 20m south. How far is he from the starting point?",
    options: [10, 20, 30, 40],
    answer: 30,
    explanation: "He moves 30m east while north-south cancels out. So distance = 30m.",
  },

  // Ages
  {
    id: 16,
    topic: "Ages",
    question: "A father is three times as old as his son. After 10 years, the father will be twice as old. Find their ages.",
    options: ["30, 10", "40, 15", "45, 20", "50, 25"],
    answer: "30, 10",
    explanation: "Solving 3x and 2(x+10) gives x = 10, so father = 30 years.",
  },

  // Puzzles
  {
    id: 17,
    topic: "Puzzles",
    question: "Find the missing number: 5, 11, 17, 23, ?",
    options: [27, 29, 30, 31],
    answer: 29,
    explanation: "Adding 6 to each term: 5+6=11, 11+6=17, so next is 23+6=29.",
  },
];

export default questions;
