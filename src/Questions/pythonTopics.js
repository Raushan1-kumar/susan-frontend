export const pythonTopics = [
  // ========================= BASIC CONCEPTS =========================
  {
    id: 1,
    title: "Introduction to Python",
    category: "Basic",
    content: [
      {
        heading: "What is Python?",
        text: "Python is an interpreted, high-level, dynamically-typed programming language. It is widely used in web development, data science, automation, and AI.",
      },
      {
        heading: "Why Learn Python?",
        text: "Python is easy to read and write, has vast libraries, and is used in almost every major tech field.",
      },
      {
        heading: "Hello World Program",
        text: "```python\nprint('Hello, World!')\n```",
      },
    ],
  },

  {
    id: 2,
    title: "Python Variables & Data Types",
    category: "Basic",
    content: [
      {
        heading: "Declaring Variables",
        text: "In Python, variables do not require explicit type declarations.",
      },
      {
        heading: "Data Types",
        subtopics: [
          { subheading: "Numeric Types", text: "int, float, complex" },
          { subheading: "Sequence Types", text: "list, tuple, range" },
          { subheading: "Boolean", text: "True, False" },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Control Flow in Python",
    category: "Basic",
    content: [
      {
        heading: "Conditional Statements",
        subtopics: [
          {
            subheading: "if-else",
            text: "Executes different blocks based on conditions.",
          },
          {
            subheading: "elif",
            text: "Used when multiple conditions need to be checked.",
          },
        ],
      },
      {
        heading: "Loops",
        subtopics: [
          {
            subheading: "for Loop",
            text: "Iterates over sequences like lists, tuples, etc.",
          },
          {
            subheading: "while Loop",
            text: "Executes a block as long as a condition is true.",
          },
        ],
      },
    ],
  },

  // ========================= INTERMEDIATE CONCEPTS =========================
  {
    id: 4,
    title: "Functions in Python",
    category: "Intermediate",
    content: [
      {
        heading: "Defining Functions",
        text: "Functions are reusable blocks of code defined using `def`.",
      },
      {
        heading: "Lambda Functions",
        text: "Anonymous functions that can have multiple arguments but only one expression.",
      },
    ],
  },

  {
    id: 5,
    title: "Object-Oriented Programming (OOP) in Python",
    category: "Intermediate",
    content: [
      {
        heading: "Classes & Objects",
        text: "Python supports object-oriented programming using classes and objects.",
      },
      {
        heading: "Inheritance",
        text: "Allows one class to inherit attributes and methods from another class.",
      },
    ],
  },

  // ========================= ADVANCED CONCEPTS =========================
  {
    id: 6,
    title: "Python Libraries for Data Science",
    category: "Advanced",
    content: [
      {
        heading: "NumPy",
        text: "Used for numerical computing and array manipulations.",
      },
      {
        heading: "Pandas",
        text: "Provides data structures like DataFrames for easy data manipulation.",
      },
    ],
  },

  {
    id: 7,
    title: "Multithreading in Python",
    category: "Advanced",
    content: [
      {
        heading: "Threading Module",
        text: "Used for parallel processing in Python.",
      },
    ],
  },
];

export default pythonTopics;
