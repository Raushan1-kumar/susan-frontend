const puzzleQuestions = [
  { 
      id: 1, 
      question: "You are standing outside a room with three switches, but only one switch controls a light bulb inside the room. You can toggle the switches as many times as you like, but once you open the door to check the bulb, you cannot touch the switches again. How do you determine which switch controls the bulb?", 
      solutionHint: "Use the heat of the bulb to identify the correct switch."
  },
  { 
      id: 2, 
      question: "You have a 3-liter jug and a 5-liter jug, and an unlimited water supply. How can you measure exactly 4 liters of water?", 
      solutionHint: "Use the difference between the jugs' capacities."
  },
  { 
      id: 3, 
      question: "A farmer needs to cross a river with a wolf, a goat, and a cabbage. He can only take one item at a time in his boat. If left alone, the wolf will eat the goat, and the goat will eat the cabbage. How can he get everything across safely?", 
      solutionHint: "Take the goat first, then return and swap."
  },
  { 
      id: 4, 
      question: "You have two ropes that burn unevenly in exactly one hour each. How do you measure exactly 45 minutes using them?", 
      solutionHint: "Burn one rope from both ends and the other from one end."
  },
  { 
      id: 5, 
      question: "You are in a dark room with a candle, a matchstick, and a lamp. What do you light first?", 
      solutionHint: "Think about what is required to light anything."
  },
  { 
      id: 6, 
      question: "A man is looking at a portrait. Someone asks, 'Whose picture are you looking at?' The man replies, 'Brothers and sisters, I have none. But this man's father is my father's son.' Who is in the picture?", 
      solutionHint: "Break the sentence into parts and analyze logically."
  },
  { 
      id: 7, 
      question: "You have 8 identical-looking balls, but one of them is slightly heavier. You have a balance scale and can use it only twice. How do you find the heavier ball?", 
      solutionHint: "Divide the balls into groups and weigh them strategically."
  },
  { 
      id: 8, 
      question: "A clock shows the time as 3:15. What is the angle between the hour and the minute hand?", 
      solutionHint: "Use the formula: Angle = |(30*hour - 5.5*minutes)|."
  },
  { 
      id: 9, 
      question: "You are trapped in a room with two doors. One door leads to certain death, and the other leads to freedom. Two guards stand by the doors: one always tells the truth, and the other always lies. You can ask only one question to one guard. What do you ask to find the safe door?", 
      solutionHint: "Ask what the other guard would say, then take the opposite door."
  },
  { 
      id: 10, 
      question: "You are in a race and you overtake the person in second place. What position are you in now?", 
      solutionHint: "Think carefully about the wording of the question."
  },

    { 
        id: 11, 
        question: "You have two sand timers—one measures 7 minutes and the other 4 minutes. How can you use them to measure exactly 9 minutes?", 
        solutionHint: "Start both timers together and track when one finishes."
    },
    { 
        id: 12, 
        question: "You are in a room with three light bulbs and three switches outside. You can enter the room only once. How do you determine which switch corresponds to which bulb?", 
        solutionHint: "Turn on one switch for a while, then turn it off."
    },
    { 
        id: 13, 
        question: "A boy and his father were in a car accident. The father died at the scene. The boy was rushed to the hospital. The surgeon looked at the boy and said, 'I can't operate on him, he's my son.' How is this possible?", 
        solutionHint: "Consider who else could be the parent."
    },
    { 
        id: 14, 
        question: "You have 100 doors, all initially closed. You toggle the state of doors at intervals: every 1st, every 2nd, every 3rd, etc., up to the 100th. Which doors remain open?", 
        solutionHint: "Look at numbers with an odd number of factors."
    },
    { 
        id: 15, 
        question: "You are given a 9x9 grid of numbers, where all rows and columns sum to the same total except one row. How do you find the incorrect row efficiently?", 
        solutionHint: "Compare row sums and find the odd one out."
    },
    { 
        id: 16, 
        question: "A man walks one mile south, one mile west, and one mile north. He ends up where he started. Where is he?", 
        solutionHint: "Think of the North Pole and circular paths."
    },
    { 
        id: 17, 
        question: "You have 12 identical-looking balls, but one is either heavier or lighter. You can use a balance scale three times. How do you find the odd ball and determine if it's heavier or lighter?", 
        solutionHint: "Divide into groups and use process of elimination."
    },
    { 
        id: 18, 
        question: "A father and son get into a car crash. The father dies, and the son is rushed to the hospital. The surgeon refuses to operate and says, 'I cannot operate on my own son.' Who is the surgeon?", 
        solutionHint: "Think beyond traditional gender roles."
    },
    { 
        id: 19, 
        question: "You are locked in a room with two identical doors. One leads to freedom, the other to death. Two guards stand there—one always lies, and one always tells the truth. You can ask only one question to one guard. What do you ask?", 
        solutionHint: "Ask what the other guard would say and go the opposite way."
    },
    { 
        id: 20, 
        question: "A plane crashes on the border of two countries. Where do they bury the survivors?", 
        solutionHint: "Survivors are not buried."
    },
    { 
        id: 21, 
        question: "A farmer has a dog, a chicken, and a bag of grain. He needs to cross a river but can only take one at a time. How does he do it without anything getting eaten?", 
        solutionHint: "Take the chicken first, return, and swap strategically."
    },
    { 
        id: 22, 
        question: "I have keys but open no locks. I have space but no room. You can enter, but you can't go outside. What am I?", 
        solutionHint: "Think about something you use to type."
    },
    { 
        id: 23, 
        question: "There are three boxes: one labeled 'Apples,' one 'Oranges,' and one 'Apples & Oranges.' All labels are wrong. You can pick one fruit from one box to fix the labels. Which box do you pick?", 
        solutionHint: "Pick from the mixed box and adjust the labels accordingly."
    },
    { 
        id: 24, 
        question: "A girl meets her uncle in a restaurant and asks how old he is. He replies, 'I am twice as old as I was 10 years ago.' How old is he?", 
        solutionHint: "Set up an equation based on his statement."
    },
    { 
        id: 25, 
        question: "If a doctor gives you three pills and tells you to take one every half hour, how long will it take to finish them?", 
        solutionHint: "Count the intervals instead of pills."
    }

];

  
  export default puzzleQuestions;
  