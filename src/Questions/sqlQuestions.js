const sqlQuestions = [
    {
      id: 1,
      question: "What is SQL?",
      answer:
        "SQL (Structured Query Language) is a programming language used to manage and manipulate relational databases.",
      topic: "Basics",
    },
    {
      id: 2,
      question: "What is the difference between SQL and MySQL?",
      answer:
        "SQL is a language used for querying databases, while MySQL is a database management system that uses SQL.",
      topic: "Basics",
    },
    {
      id: 3,
      question: "What are the different types of SQL commands?",
      answer:
        "SQL commands are categorized into DDL (Data Definition Language), DML (Data Manipulation Language), DCL (Data Control Language), and TCL (Transaction Control Language).",
      topic: "Commands",
    },
    {
      id: 4,
      question: "What is a Primary Key in SQL?",
      answer:
        "A Primary Key is a unique identifier for each record in a table. It cannot have NULL values and must be unique.",
      topic: "Keys & Constraints",
    },
    {
      id: 5,
      question: "What is the difference between WHERE and HAVING?",
      answer:
        "WHERE is used to filter rows before grouping, while HAVING is used to filter after grouping.",
      topic: "Filtering & Conditions",
    },
    {
      id: 6,
      question: "What is the difference between UNION and UNION ALL?",
      answer:
        "UNION removes duplicate rows, while UNION ALL includes all rows, including duplicates.",
      topic: "Joins & Set Operations",
    },
    {
      id: 7,
      question: "What are ACID properties in SQL?",
      answer:
        "ACID stands for Atomicity, Consistency, Isolation, and Durability. These properties ensure reliable transactions in a database.",
      topic: "Transactions",
    },
    {
      id: 8,
      question: "What is an Index in SQL?",
      answer:
        "An index is used to speed up searches in a database by creating a pointer to the data.",
      topic: "Performance Optimization",
    },
    {
      id: 9,
      question: "What is a Foreign Key?",
      answer:
        "A Foreign Key is a column in one table that is a Primary Key in another table, creating a relationship between the two tables.",
      topic: "Keys & Constraints",
    },
    {
      id: 10,
      question: "What is the difference between DELETE, TRUNCATE, and DROP?",
      answer:
        "DELETE removes rows one by one with a WHERE condition, TRUNCATE removes all rows quickly, and DROP removes the entire table.",
      topic: "Data Modification",
    },
  ];
  
  export default sqlQuestions;
  