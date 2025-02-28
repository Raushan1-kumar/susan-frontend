const dsaTopics = [
    { 
      title: "Arrays", 
      content: "Arrays are a collection of elements stored in contiguous memory locations.",
      exampleCode: `// C++ Example: Finding the max element in an array
  #include <iostream>
  using namespace std;
  int main() {
      int arr[] = {3, 5, 1, 8, 2};
      int maxVal = arr[0];
      for (int i = 1; i < 5; i++) {
          if (arr[i] > maxVal)
              maxVal = arr[i];
      }
      cout << "Max Value: " << maxVal;
      return 0;
  }`
    },
    { 
      title: "Linked List", 
      content: "A linked list is a linear data structure where elements are linked using pointers.",
      exampleCode: `// C++ Example: Linked List Node Structure
  #include <iostream>
  using namespace std;
  class Node {
  public:
      int data;
      Node* next;
      Node(int val) { data = val; next = NULL; }
  };
  int main() {
      Node* head = new Node(10);
      head->next = new Node(20);
      cout << head->next->data;
      return 0;
  }`
    },
    { 
      title: "Stack", 
      content: "A stack is a Last In First Out (LIFO) data structure used for function calls, undo features, etc.",
    },
  ];
  
  export default dsaTopics;
  