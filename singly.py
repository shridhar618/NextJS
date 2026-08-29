class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    # Insert at front
    def insert_front(self, data):
        new_node = Node(data)

        new_node.next = self.head
        self.head = new_node

    # Insert at end
    def insert_end(self, data):
        new_node = Node(data)

        if self.head is None:
            self.head = new_node
            return

        current = self.head

        while current.next:
            current = current.next

        current.next = new_node

    # Delete at front
    def delete_front(self):
        if self.head is None:
            return

        self.head = self.head.next

    # Delete at end
    def delete_end(self):
        if self.head is None:
            return

        # Only one node
        if self.head.next is None:
            self.head = None
            return

        current = self.head

        while current.next.next:
            current = current.next

        current.next = None

    # Display linked list
    def display(self):
        current = self.head

        while current:
            print(current.data, end=" -> ")
            current = current.next

        print("None")


# Create linked list
ll = LinkedList()

# Insert at front
ll.insert_front(20)
ll.insert_front(10)

# Insert at end
ll.insert_end(30)
ll.insert_end(40)

ll.display()

# Delete at front
ll.delete_front()
ll.display()

# Delete at end
ll.delete_end()
ll.display()