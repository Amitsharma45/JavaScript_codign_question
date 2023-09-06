// what is event propagation?
// event propagation is a way of defining the element order when an event occurs.
// it inside a <df you have a <p> elemeniv> element, and the user clicks on the <p> element, which element's "click" event should be handled first?
// in bubbling the innermost element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
// in bubbling the outermost element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.
// in bubbling the order is the same as the order in which the elements were created.

// Capturing
// the event starts from the top element and trickles down to the element that triggered the event.

const div = document.querySelector('div')
const p = document.querySelector('p')
const btn = document.querySelector('button')

function fun(event) {
    console.log()
}

div.addEventListener('click', (e) => {
    // e.stopPropagation()
    console.log(e.currentTarget.tagName)
})
p.addEventListener('click', (e) => {
    console.log(e.currentTarget.tagName)
})
btn.addEventListener('click', (e) => {
    console.log(e.currentTarget.tagName)
})


// Event bubbling  bottom to top and ijn capturing vice.vera.

// event Capturing
// ,{
//     capture:true
// }

// to stop event propagation in code.
// e.stopPropagation()