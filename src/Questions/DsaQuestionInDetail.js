const allProblems = [
  {
    title: "Two Sum",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        input: { nums: [2, 7, 11, 15], target: 9 },
        output: [0, 1],
      },
      {
        input: { nums: [3, 2, 4], target: 6 },
        output: [1, 2],
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
    ],
  },
  {
    title: "LRU Cache",
    description:
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    constraints: {
      capacity: "1 ≤ capacity ≤ 3000",
      operations: "Total number of operations ≤ 10⁵",
    },
  },
  {
    title: "Decode Ways",
    description:
      "A message containing letters from A-Z is encoded using the following mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26. Given a string s, return the number of ways to decode it.",
    examples: [
      {
        input: { s: "12" },
        output: 2,
      },
      {
        input: { s: "226" },
        output: 3,
      },
    ],
    constraints: {
      "s.length": "1 ≤ s.length ≤ 100",
      "s[i]": "s[i] is a digit between '1' and '9'",
    },
  },
  {
    title: "Longest Increasing Subsequence",
    description:
      "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    examples: [
      {
        input: { nums: [10, 9, 2, 5, 3, 7, 101, 18] },
        output: 4,
      },
    ],
    constraints: {
      "nums.length": "1 ≤ nums.length ≤ 2500",
      "nums[i]": "-10⁴ ≤ nums[i] ≤ 10⁴",
    },
  },
  {
    title: "Coin Change",
    description:
      "Given an integer array coins representing different denominations and an integer amount, return the fewest number of coins that make up that amount.",
    examples: [
      {
        input: { coins: [1, 2, 5], amount: 11 },
        output: 3,
      },
    ],
    constraints: {
      "coins.length": "1 ≤ coins.length ≤ 12",
      "coins[i]": "1 ≤ coins[i] ≤ 2³¹ - 1",
      amount: "0 ≤ amount ≤ 10⁴",
    },
  },
  {
    title: "House Robber",
    description:
      "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. However, you cannot rob adjacent houses. Determine the maximum amount you can rob.",
    examples: [
      {
        input: { nums: [2, 7, 9, 3, 1] },
        output: 12,
      },
      {
        input: { nums: [2, 1, 1, 2] },
        output: 4,
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 400"],
  },
  {
    title: "Unique Paths",
    description:
      "A robot is located at the top-left corner of an m x n grid. The robot can only move either down or right at any point. Find the number of unique paths to reach the bottom-right corner.",
    examples: [
      {
        input: { m: 3, n: 7 },
        output: 28,
      },
      {
        input: { m: 3, n: 2 },
        output: 3,
      },
    ],
    constraints: ["1 ≤ m, n ≤ 100"],
  },
  {
    title: "Binary Tree Level Order Traversal",
    description:
      "Given the root of a binary tree, return its level order traversal (each level as a separate list).",
    examples: [
      {
        input: { root: [3, 9, 20, null, null, 15, 7] },
        output: [[3], [9, 20], [15, 7]],
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 2000]",
      "-1000 ≤ Node.val ≤ 1000",
    ],
  },
  {
    title: "Kth Smallest Element in a BST",
    description:
      "Given the root of a binary search tree, return the kth smallest element in the tree.",
    examples: [
      {
        input: { root: [3, 1, 4, null, 2], k: 1 },
        output: 1,
      },
    ],
    constraints: [
      "The number of nodes in the tree is n (1 ≤ n ≤ 10⁴)",
      "0 ≤ Node.val ≤ 10⁵",
    ],
  },
  {
    title: "Lowest Common Ancestor of a Binary Tree",
    description:
      "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes.",
    examples: [
      {
        input: { root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p: 5, q: 1 },
        output: 3,
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [2, 10⁵]",
      "-10⁹ ≤ Node.val ≤ 10⁹",
    ],
  },
  {
    title: "Serialize and Deserialize Binary Tree",
    description:
      "Design an algorithm to serialize and deserialize a binary tree.",
    examples: [
      {
        input: { root: [1, 2, 3, null, null, 4, 5] },
        output: "[1,2,3,null,null,4,5]",
      },
    ],
    constraints: [
      "The number of nodes in the tree is in the range [0, 10⁴]",
      "-1000 ≤ Node.val ≤ 1000",
    ],
  },
  {
    title: "Valid Anagram",
    description:
      "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    examples: [
      {
        input: { s: "anagram", t: "nagaram" },
        output: true,
      },
    ],
    constraints: [
      "1 ≤ s.length, t.length ≤ 5 * 10⁴",
      "s and t consist of lowercase English letters.",
    ],
  },
  {
    title: "Group Anagrams",
    description: "Given an array of strings, group the anagrams together.",
    examples: [
      {
        input: { strs: ["eat", "tea", "tan", "ate", "nat", "bat"] },
        output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
      },
    ],
    constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100"],
  },
  {
    title: "Find All Anagrams in a String",
    description:
      "Given a string s and a non-empty string p, find all the start indices of p’s anagrams in s.",
    examples: [
      {
        input: { s: "cbaebabacd", p: "abc" },
        output: [0, 6],
      },
    ],
    constraints: [
      "1 ≤ s.length, p.length ≤ 3 * 10⁴",
      "s and p consist of lowercase English letters.",
    ],
  },
  {
    title: "Palindrome Partitioning",
    description:
      "Given a string s, partition s such that every substring of the partition is a palindrome.",
    examples: [
      {
        input: { s: "aab" },
        output: [
          ["a", "a", "b"],
          ["aa", "b"],
        ],
      },
    ],
    constraints: ["1 ≤ s.length ≤ 16"],
  },
  {
    title: "Merge K Sorted Lists",
    description:
      "Merge k sorted linked lists and return it as one sorted list.",
    examples: [
      {
        input: {
          lists: [
            [1, 4, 5],
            [1, 3, 4],
            [2, 6],
          ],
        },
        output: [1, 1, 2, 3, 4, 4, 5, 6],
      },
    ],
    constraints: [
      "k = number of linked lists (0 ≤ k ≤ 10⁴)",
      "0 ≤ linked list length ≤ 500",
      "-10⁴ ≤ Node.val ≤ 10⁴",
    ],
  },
  {
    title: "Sort Colors",
    description:
      "Given an array with n objects colored red, white, or blue, sort them in place.",
    examples: [
      {
        input: { nums: [2, 0, 2, 1, 1, 0] },
        output: [0, 0, 1, 1, 2, 2],
      },
    ],
    constraints: ["n == nums.length", "1 ≤ n ≤ 300", "nums[i] is 0, 1, or 2"],
  },
  {
    title: "Subsets",
    description: "Given an integer array nums, return all possible subsets.",
    examples: [
      {
        input: { nums: [1, 2, 3] },
        output: [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]],
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10"],
  },
  {
    title: "Letter Combinations of a Phone Number",
    description:
      "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
    examples: [
      {
        input: { digits: "23" },
        output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
      },
    ],
    constraints: ["0 ≤ digits.length ≤ 4", "digits[i] is a digit in ['2'-'9']"],
  },
  {
    title: "Generate Parentheses",
    description:
      "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    examples: [
      {
        input: { n: 3 },
        output: ["((()))", "(()())", "(())()", "()(())", "()()()"],
      },
    ],
    constraints: ["1 ≤ n ≤ 8"],
  },
  {
    title: "Regular Expression Matching",
    description:
      "Implement regular expression matching with support for '.' and '*' in patterns.",
    examples: [
      {
        input: { s: "aa", p: "a*" },
        output: true,
      },
    ],
    constraints: [
      "1 ≤ s.length, p.length ≤ 20",
      "s contains only lowercase English letters",
      "p contains only lowercase English letters, '.' and '*'",
    ],
  },
  {
    title: "Wildcard Matching",
    description:
      "Implement wildcard pattern matching with support for '?' and '*'.",
    examples: [
      {
        input: { s: "aa", p: "a" },
        output: false,
      },
      {
        input: { s: "aa", p: "*" },
        output: true,
      },
    ],
    constraints: [
      "1 ≤ s.length, p.length ≤ 2000",
      "s contains only lowercase English letters",
      "p contains only lowercase English letters, '?' and '*'",
    ],
  },
  {
    title: "Find Median from Data Stream",
    description:
      "The median is the middle value in an ordered integer list. Implement a class that supports adding numbers and finding the median.",
    examples: [
      {
        input: {
          commands: ["MedianFinder", "addNum", "addNum", "findMedian"],
          values: [[], [1], [2], []],
        },
        output: [null, null, null, 1.5],
      },
    ],
    constraints: ["At most 10⁵ calls will be made to addNum and findMedian"],
  },
  {
    title: "Sliding Window Maximum",
    description:
      "Given an array nums and a sliding window of size k, return the maximum value in each window.",
    examples: [
      {
        input: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 },
        output: [3, 3, 5, 5, 6, 7],
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 10⁵",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "1 ≤ k ≤ nums.length",
    ],
  },
  {
    title: "Longest Consecutive Sequence",
    description:
      "Given an unsorted array of integers, find the length of the longest consecutive elements sequence.",
    examples: [
      {
        input: { nums: [100, 4, 200, 1, 3, 2] },
        output: 4,
      },
    ],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
  },
  {
    title: "Longest Palindromic Substring",
    description:
      "Given a string s, return the longest palindromic substring in s.",
    examples: [
      {
        input: { s: "babad" },
        output: "bab",
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 1000",
      "s consists of only lowercase and uppercase English letters",
    ],
  },
  {
    title: "Basic Calculator",
    description:
      "Implement a basic calculator to evaluate a simple expression string containing numbers, '+', '-', '(', and ')'.",
    examples: [
      {
        input: { s: "1 + 1" },
        output: 2,
      },
      {
        input: { s: "(1+(4+5+2)-3)+(6+8)" },
        output: 23,
      },
    ],
    constraints: [
      "1 ≤ s.length ≤ 3 * 10⁵",
      "s consists of digits, '+', '-', '(', ')', and spaces",
      "s is a valid expression",
    ],
  },
  {
    title: "Add Two Numbers",
    description:
      "Given two non-empty linked lists representing two non-negative integers, add the two numbers and return the sum as a linked list.",
    examples: [
      {
        input: { l1: [2, 4, 3], l2: [5, 6, 4] },
        output: [7, 0, 8],
      },
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100]",
      "0 ≤ Node.val ≤ 9",
      "The number does not contain leading zeros except 0 itself",
    ],
  },
  {
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: { s: "abcabcbb" },
        output: 3,
      },
    ],
    constraints: [
      "0 ≤ s.length ≤ 5 * 10⁴",
      "s consists of English letters, digits, symbols, and spaces",
    ],
  },
  {
    title: "Median of Two Sorted Arrays",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    examples: [
      {
        input: { nums1: [1, 3], nums2: [2] },
        output: 2.0,
      },
    ],
    constraints: ["0 ≤ m, n ≤ 1000", "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶"],
  },
  {
    title: "Container With Most Water",
    description:
      "Given n non-negative integers representing an elevation map, find two lines that can contain the most water.",
    examples: [
      {
        input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] },
        output: 49,
      },
    ],
    constraints: ["2 ≤ height.length ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
  },
  {
    title: "Valid Parentheses",
    description:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      {
        input: { s: "()[]{}" },
        output: true,
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴"],
  },
  {
    title: "Search in Rotated Sorted Array",
    description:
      "Given a rotated sorted array, return the index of the target if found, otherwise return -1.",
    examples: [
      {
        input: { nums: [4, 5, 6, 7, 0, 1, 2], target: 0 },
        output: 4,
      },
    ],
    constraints: [
      "1 ≤ nums.length ≤ 5000",
      "-10⁴ ≤ nums[i] ≤ 10⁴",
      "All elements are unique",
    ],
  },
  {
    title: "Merge Intervals",
    description:
      "Given a collection of intervals, merge all overlapping intervals.",
    examples: [
      {
        input: {
          intervals: [
            [1, 3],
            [2, 6],
            [8, 10],
            [15, 18],
          ],
        },
        output: [
          [1, 6],
          [8, 10],
          [15, 18],
        ],
      },
    ],
    constraints: [
      "1 ≤ intervals.length ≤ 10⁴",
      "intervals[i].length = 2",
      "0 ≤ start ≤ end ≤ 10⁴",
    ],
  },
  {
    title: "Find Minimum in Rotated Sorted Array",
    description: "Find the minimum element in a rotated sorted array.",
    examples: [
      {
        input: { nums: [3, 4, 5, 1, 2] },
        output: 1,
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴"],
  },
  {
    title: "Largest Rectangle in Histogram",
    description:
      "Given an array of heights, return the area of the largest rectangle in the histogram.",
    examples: [
      {
        input: { heights: [2, 1, 5, 6, 2, 3] },
        output: 10,
      },
    ],
    constraints: ["1 ≤ heights.length ≤ 10⁵", "0 ≤ heights[i] ≤ 10⁴"],
  },
  {
    title: "Trapping Rain Water",
    description:
      "Given an array of heights, compute how much water it can trap after raining.",
    examples: [
      {
        input: { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] },
        output: 6,
      },
    ],
    constraints: ["1 ≤ height.length ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
  },
  {
    title: "Reverse Linked List",
    description:
      "Given the head of a singly linked list, reverse the list and return the reversed list.",
    examples: [
      {
        input: { head: [1, 2, 3, 4, 5] },
        output: [5, 4, 3, 2, 1],
      },
    ],
    constraints: [
      "The number of nodes in the list is in the range [0, 5000]",
      "-5000 ≤ Node.val ≤ 5000",
    ],
  },
  {
    title: "Climbing Stairs",
    description:
      "You can climb a staircase with n steps by taking 1 or 2 steps at a time. Find the number of distinct ways to reach the top.",
    examples: [
      {
        input: { n: 3 },
        output: 3,
      },
    ],
    constraints: ["1 ≤ n ≤ 45"],
  },
  {
    title: "Word Search",
    description:
      "Given a grid and a word, determine if the word exists in the grid.",
    examples: [
      {
        input: {
          board: [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
          ],
          word: "ABCCED",
        },
        output: true,
      },
    ],
    constraints: [
      "1 ≤ board.length, board[i].length ≤ 200",
      "1 ≤ word.length ≤ 10³",
    ],
  },
  {
    title: "Implement Trie (Prefix Tree)",
    description:
      "Implement a trie (prefix tree) with insert, search, and startsWith methods.",
    examples: [
      {
        input: {
          commands: ["Trie", "insert", "search", "startsWith"],
          values: [[], ["apple"], ["apple"], ["app"]],
        },
        output: [null, null, true, true],
      },
    ],
    constraints: [
      "1 ≤ word.length ≤ 2000",
      "All words contain only lowercase English letters",
    ],
  },
  {
    title: "Word Ladder",
    description:
      "Given two words, beginWord and endWord, and a dictionary wordList, return the shortest transformation sequence from beginWord to endWord.",
    examples: [
      {
        input: {
          beginWord: "hit",
          endWord: "cog",
          wordList: ["hot", "dot", "dog", "lot", "log", "cog"],
        },
        output: 5,
      },
    ],
    constraints: [
      "1 ≤ beginWord.length ≤ 10",
      "1 ≤ endWord.length ≤ 10",
      "1 ≤ wordList.length ≤ 5000",
    ],
  },
  {
    title: "LRU Cache",
    description:
      "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
    constraints: ["1 ≤ capacity ≤ 3000", "Total number of operations ≤ 10⁵"],
  },
  {
    title: "Decode Ways",
    description:
      "Given a string s, return the number of ways to decode it following the mapping: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26.",
    examples: [
      {
        input: { s: "12" },
        output: 2,
      },
    ],
    constraints: ["1 ≤ s.length ≤ 100", "s[i] is a digit between '1' and '9'"],
  },
  {
    title: "Longest Increasing Subsequence",
    description:
      "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    examples: [
      {
        input: { nums: [10, 9, 2, 5, 3, 7, 101, 18] },
        output: 4,
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 2500", "-10⁴ ≤ nums[i] ≤ 10⁴"],
  },
  {
    title: "Coin Change",
    description:
      "Given an array of coins and an amount, return the fewest number of coins needed to make up the amount.",
    examples: [
      {
        input: { coins: [1, 2, 5], amount: 11 },
        output: 3,
      },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ amount ≤ 10⁴"],
  },
  {
    title: "Maximum Subarray",
    description:
      "Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.",
    examples: [
      {
        input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] },
        output: 6,
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
  },
  {
    title: "Jump Game",
    description:
      "Given an array nums, return whether you can reach the last index starting from index 0.",
    examples: [
      {
        input: { nums: [2, 3, 1, 1, 4] },
        output: true,
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "0 ≤ nums[i] ≤ 10⁵"],
  },
  {
    title: "Best Time to Buy and Sell Stock",
    description:
      "Given an array prices where prices[i] is the price of a given stock on day i, return the maximum profit you can achieve.",
    examples: [
      {
        input: { prices: [7, 1, 5, 3, 6, 4] },
        output: 5,
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
  },

  {
    title: "Combination Sum",
    description:
      "Given an array of distinct integers candidates and a target integer, return all unique combinations of candidates where the chosen numbers sum to target.",
    examples: [
      {
        input: { candidates: [2, 3, 6, 7], target: 7 },
        output: [[2, 2, 3], [7]],
      },
    ],
    constraints: [
      "1 ≤ candidates.length ≤ 30",
      "1 ≤ candidates[i] ≤ 200",
      "All elements of candidates are unique",
      "1 ≤ target ≤ 500",
    ],
  },
  {
    title: "Word Search",
    description:
      "Given a board of characters and a word, return true if the word exists in the grid, false otherwise.",
    examples: [
      {
        input: {
          board: [
            ["A", "B", "C", "E"],
            ["S", "F", "C", "S"],
            ["A", "D", "E", "E"],
          ],
          word: "ABCCED",
        },
        output: true,
      },
    ],
    constraints: [
      "1 ≤ board.length, board[i].length ≤ 200",
      "1 ≤ word.length ≤ 10³",
      "board and word consist only of uppercase English letters",
    ],
  },
  {
    title: "Graph Valid Tree",
    description:
      "Given n nodes labeled from 0 to n-1 and a list of edges, return true if they form a valid tree.",
    examples: [
      {
        input: {
          n: 5,
          edges: [
            [0, 1],
            [0, 2],
            [0, 3],
            [1, 4],
          ],
        },
        output: true,
      },
    ],
    constraints: [
      "1 ≤ n ≤ 10⁴",
      "0 ≤ edges.length ≤ 10⁴",
      "edges[i] contains two distinct nodes",
    ],
  },
  {
    title: "Number of Islands",
    description:
      "Given an m x n grid of '1' (land) and '0' (water), return the number of islands.",
    examples: [
      {
        input: {
          grid: [
            ["1", "1", "1", "1", "0"],
            ["1", "1", "0", "1", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "0", "0", "0"],
          ],
        },
        output: 1,
      },
    ],
    constraints: [
      "1 ≤ grid.length, grid[i].length ≤ 300",
      "grid[i][j] is '0' or '1'",
    ],
  },
  {
    title: "Course Schedule",
    description:
      "There are a total of numCourses courses to take, labeled from 0 to numCourses-1. Given prerequisites, return whether you can finish all courses.",
    examples: [
      {
        input: { numCourses: 2, prerequisites: [[1, 0]] },
        output: true,
      },
    ],
    constraints: [
      "1 ≤ numCourses ≤ 2000",
      "0 ≤ prerequisites.length ≤ 5000",
      "prerequisites[i].length == 2",
    ],
  },
  {
    title: "Merge Two Sorted Lists",
    description:
      "Merge two sorted linked lists and return it as a sorted list.",
    examples: [
      {
        input: {
          l1: [1, 2, 4],
          l2: [1, 3, 4],
        },
        output: [1, 1, 2, 3, 4, 4],
      },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50]",
      "-100 ≤ Node.val ≤ 100",
      "Both l1 and l2 are sorted in non-decreasing order",
    ],
  },
];

export default allProblems;
