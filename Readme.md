1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=> getElementById            : Return a single component for the chosen ID.
=> getElementsByClassName    : returns live HTMLCollection of all elements with that class.
=> querySelector             : returns the first match (CSS selector).
=> querySelectorAll?         : returns a static NodeList of all matches (CSS selector)


2. How do you create and insert a new element into the DOM?

First I will create a variable, suppose using const. Then I will use document.createElement. In document.createElement, I will specify my HTML element.Example : document.createElement("div").Then I can add text, for example: div.textContent = "Hello". Finally, to insert it into the DOM, I can use document.body.appendChild(div).

3. What is Event Bubbling and how does it work?

First i will  target element.
Then it will bubbles up through ancestors (child → parent → document).


4. What is Event Delegation in JavaScript? Why is it useful?

By adding one event listener to the parent, I can handle the events of its children. Here, bubbling works. It helps with dynamic elements and improves performance

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()  : stops the default browser action.
stopPropagation() : stops the event from bubbling up the DOM.



