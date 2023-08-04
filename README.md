# Linked List

This app is a demonstration of my implementation of the Linked-List data structure in TypeScript.

## Technologies Used

This app is built with HTML, SASS, TypeScript and Webpack. The Linked-List is implemented with a JavaScript class, which contains several methods that control the storage of ListNode class objects and the links between the objects.

ListNode objects have two properties- value and nextNode. The value propery can be a variable of any type and the NextNode property is a reference to the next ListNode in the list. The only class method is toString, which returns the value property as a string.

The LinkdedList class has one property and eleven methods. The headNode property contains a reference to the first ListNode object in the list. The headNode property initializes as null. The eleven methods are as follows:

- append() adds a ListNode with the supplied value to the end of the list

- prepend() adds a ListNode with the supplied value to the beginning of the list

- size() returns the number of elements in the list

- head() returns the first element as a ListNode object

- tail() returns the last element as a ListNode object

- at() returns the element at the supplied index as a ListNode object

- pop() removes the last element from the list

- contains() returns true if the supplied value matches the value property of one of the ListNodes in the list and false if it doesn't

- find() returns the index of a value if it matches the value property of one of the ListNodes, and null if it does not

- insertAt() inserts a ListNode with the supplied value to the list at the supplied index, moving the ListNode currently at that index and all ListNodes at higher indices to one index higher

- remove() removes the ListNode at the supplied index

## Functionality

This app displays the current state of the Linked List on the top of the page and supplies inputs for performing actions using the methods of the class below. The user can enter text into the inputs and manipulate a list to see a visual represention of how the data structure works. A live deployment of the app is hosted on GitHub Pages [here](https://jonathandpotter.github.io/linked-list/).
