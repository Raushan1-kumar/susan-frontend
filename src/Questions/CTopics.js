export const cTopics = [
  // ========================= BASIC CONCEPTS =========================
  {
    id: 1,
    title: "Introduction to C",
    category: "Basic",
    content: [
      {
        heading: "What is C?",
        text: "C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in the 1970s. It is known for its efficiency and control over system hardware.",
      },
      {
        heading: "Why Learn C?",
        text: "C is the foundation of many modern languages (like C++, Java, Python) and is widely used in system programming, embedded systems, and software development.",
      },
      {
        heading: "History of C",
        text: "C was developed to improve upon B language and is the basis of UNIX operating system development.",
      },
    ],
  },

  {
    id: 2,
    title: "Setting Up the C Environment",
    category: "Basic",
    content: [
      {
        heading: "Installing a C Compiler",
        text: "To write and execute C programs, install a compiler like GCC (GNU Compiler Collection), Clang, or Turbo C++.",
      },
      {
        heading: "Writing Your First C Program",
        subtopics: [
          {
            subheading: "Hello World Program",
            text: "A simple C program to print 'Hello, World!':\n```c\n#include <stdio.h>\nint main() {\n  printf(\"Hello, World!\\n\");\n  return 0;\n}\n```",
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Variables and Data Types",
    category: "Basic",
    content: [
      {
        heading: "Understanding Variables",
        text: "Variables are used to store data in memory. Each variable must have a type and a name.",
      },
      {
        heading: "Data Types in C",
        subtopics: [
          {
            subheading: "Primitive Data Types",
            text: "int, float, char, double",
          },
          {
            subheading: "Derived Data Types",
            text: "Arrays, Pointers, Structures",
          },
          { subheading: "User-Defined Data Types", text: "Enums, Typedef" },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Operators in C",
    category: "Basic",
    content: [
      {
        heading: "Types of Operators",
        subtopics: [
          { subheading: "Arithmetic Operators", text: "+, -, *, /, %" },
          { subheading: "Relational Operators", text: "==, !=, >, <, >=, <=" },
          { subheading: "Logical Operators", text: "&&, ||, !" },
          { subheading: "Bitwise Operators", text: "&, |, ^, ~, <<, >>" },
        ],
      },
    ],
  },

  // ========================= INTERMEDIATE CONCEPTS =========================
  {
    id: 5,
    title: "Control Statements (Loops & Conditional Statements)",
    category: "Intermediate",
    content: [
      {
        heading: "Conditional Statements",
        subtopics: [
          {
            subheading: "if-else",
            text: "Used to execute different code blocks based on conditions.",
          },
          {
            subheading: "switch-case",
            text: "Used for selecting among multiple options.",
          },
        ],
      },
      {
        heading: "Loops in C",
        subtopics: [
          {
            subheading: "for Loop",
            text: "Used when the number of iterations is known.",
          },
          {
            subheading: "while Loop",
            text: "Used when the number of iterations is unknown.",
          },
          {
            subheading: "do-while Loop",
            text: "Executes at least once, then checks the condition.",
          },
        ],
      },
    ],
  },

  {
    id: 6,
    title: "Functions in C",
    category: "Intermediate",
    content: [
      {
        heading: "Introduction to Functions",
        text: "Functions are blocks of reusable code that perform a specific task.",
      },
      {
        heading: "Types of Functions",
        subtopics: [
          {
            subheading: "Library Functions",
            text: "Predefined functions like printf(), scanf().",
          },
          {
            subheading: "User-Defined Functions",
            text: "Custom functions created by the programmer.",
          },
        ],
      },
    ],
  },

  {
    id: 7,
    title: "Pointers in C",
    category: "Intermediate",
    content: [
      {
        heading: "What are Pointers?",
        text: "Pointers store the memory address of a variable. They are powerful tools for memory management.",
      },
      {
        heading: "Pointer Arithmetic",
        text: "Pointers can be incremented, decremented, and used in mathematical operations.",
      },
    ],
  },

  // ========================= ADVANCED CONCEPTS =========================
  {
    id: 8,
    title: "Structures and Unions",
    category: "Advanced",
    content: [
      {
        heading: "What are Structures?",
        text: "Structures allow grouping different data types into a single unit.",
      },
      {
        heading: "What are Unions?",
        text: "Unions are similar to structures but share memory among all members.",
      },
    ],
  },

  {
    id: 9,
    title: "Dynamic Memory Allocation",
    category: "Advanced",
    content: [
      {
        heading: "Memory Functions in C",
        subtopics: [
          { subheading: "malloc()", text: "Allocates memory dynamically." },
          { subheading: "calloc()", text: "Allocates and initializes memory." },
          {
            subheading: "realloc()",
            text: "Resizes dynamically allocated memory.",
          },
          { subheading: "free()", text: "Frees allocated memory." },
        ],
      },
    ],
  },

  {
    id: 10,
    title: "File Handling in C",
    category: "Advanced",
    content: [
      {
        heading: "Introduction to File Handling",
        text: "C provides functions to read, write, and manipulate files.",
      },
      {
        heading: "File Operations",
        subtopics: [
          {
            subheading: "fopen()",
            text: "Opens a file in a specific mode (read, write, append).",
          },
          {
            subheading: "fprintf() & fscanf()",
            text: "Used for formatted input/output in files.",
          },
          { subheading: "fclose()", text: "Closes an open file." },
        ],
      },
    ],
  },
];

export default cTopics;
