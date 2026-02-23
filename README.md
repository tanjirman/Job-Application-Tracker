1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    Answer:getElementById- There is only one ID in a html file. ID is a unique element. so that, we use getElementById for getting a specific element through ID.
   
           getElementsByClassName- In a Html file there have a multiple same-name-class. we use same-class for reduce the same code.in here, getElementsByClassName first of all
             give a HtmlCollection of elements with the given class. so if we give the same style or the functinality we use getElementsByClassName.
   
           querySelector / querySelectorAll-The main difference between querySelector / querySelectorAll is query selector Returns the first element that matches any
             CSS selector.And the querySelectorAll Returns a static NodeList of all elements matching the selector.

2. How do you create and insert a new element into the DOM?
   Answer:For create new element we use "document.createElement('element-name')"
          For insert new element we use there is more insert function like Add, Append, Remove etc.....giving an example
         // Create a new element
const newDiv = document.createElement('div');

// Add content or class
newDiv.innerText = "New Job Card";
newDiv.classList.add('card');

// Append it to a parent element
const jobContainer = document.getElementById('jobCards');
jobContainer.appendChild(newDiv);


3. What is Event Bubbling? And how does it work?
   Answer:Event Bubbling is when an event triggered on a child element propagates (bubbles up) to its parent elements in the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?

 Answer:Event Delegation is a technique where you attach a single event listener to a parent element to handle events on its child elements.
       Why it’s useful:

     i. Reduces memory usage because you don’t attach listeners to every child.
     ii. Automatically works for dynamically added elements.
     iii. Makes code cleaner and easier to maintain.

5. Difference between preventDefault() and stopPropagation() methods
  Answer:
    preventDefault()-
    Prevents the browser’s default behavior for an event.
    Example: Preventing a form from submitting or a link from navigating.

    stopPropagation()
    Stops the event from bubbling up (or capturing down) the DOM tree.basically used for reduce the starage which consume by same code or propagation
    Example: Preventing a click on a button from triggering a parent’s click handler.
