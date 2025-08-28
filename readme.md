What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

answer : getElementById is used to get a single element by its unique id, getElementsByClassName is used to get multiple elements that share the same class name, querySelector is used to get the first element that matches a CSS selector, and querySelectorAll is used to get all elements that match the CSS selector.

How do you create and insert a new element into the DOM?

answer : First create the element using document.createElement, then set its text or attributes, and finally insert it into the DOM using methods like appendChild, append, prepend, or insertBefore.

What is Event Bubbling and how does it work?

answer : Event bubbling means when an event happens on a child element, it first runs on that element and then moves up to its parent elements one by one until it reaches the top of the DOM.

What is Event Delegation in JavaScript? Why is it useful?

answer :Event delegation means adding one event listener to a parent element instead of many children, and the event uses bubbling to catch actions from the children. It is useful because it saves memory, makes code simpler, and works for new elements added later.

What is the difference between preventDefault() and stopPropagation() methods?

answer : preventDefault() stops the browser’s default action, like stopping a form from submitting, while stopPropagation() stops the event from bubbling up to parent elements.
