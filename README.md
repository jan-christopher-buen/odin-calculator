# odin-calculator

An on-screen calculator built with HTML, CSS, and JavaScript for The Odin Project. This is the final project of the Foundations course.

**Live preview:** https://jan-christopher-buen.github.io/odin-calculator/

## Features

- Add, subtract, multiply, and divide
- Chain operations: `12 + 7 - 1 =` evaluates one pair at a time and shows `18`
- Long decimal results are rounded to 3 decimal places
- Pressing an operator twice in a row only keeps the last one
- Typing a new number after a result starts a fresh calculation
- Dividing by zero shows a message instead of crashing
- Clear resets everything

## What I practiced

- Writing small math functions and an `operate` function, without `eval()`
- Keeping track of the first number, operator, and second number
- Handling edge cases with guard clauses and a state flag
- Laying out the buttons with Flexbox and `calc()`
- Event listeners on groups of buttons

## Built with

- HTML
- CSS (Flexbox)
- JavaScript
