Here are all of my class notes. Can be used on the midterm and final exam.

Here's the [link](http://3.224.181.5/) to my startup :)

- Links are made by putting the seen text between brackets and the link itself following using parentheses.

## Midterm Review

### Console/HTTP
HTTPS = Secure Hypertext Transport Protocol
Commands
- echo - Output the parameters of the command
- cd - Change directory
- mkdir - Make directory
- rmdir - Remove directory
- rm - Remove file(s)
- mv - Move file(s)
- cp - Copy files
- ls - List files
- curl - Command line client URL browser
- grep - Regular expression search
- find - Find files
- top - View running processes with CPU and memory usage
- df - View disk statistics
- cat - Output the contents of a file
- less - Interactively output the contents of a file
- wc - Count the words in a file
- ps - View the currently running processes
- kill - Kill a currently running process
- sudo - Execute a command as a super user (admin)
- ssh - Create a secure shell on a remote computer
- scp - Securely copy files to a remote computer
- history - Show the history of commands
- ping - Check if a website is up
- tracert - Trace the connections to a website
- dig - Show the DNS information for a domain
- man - Look up a command in the manual

Ex: make a script execuatble - chmod +x deploy.sh

| - Take output fromt he command on the left and pipe it to the command on the right

\> - redirect output to a file - overwrites the file if it exists

\>> - redirect output to a file - appends if the file exists

CNAME - point to another DNS record

A - Address record

SOA - start of authority (registrar)

TXT - text associated with a host name

### HTML
div creates a division element

Tags
- head - Header information
- title	- Title of the page
- meta - Metadata for the page such as character set or viewport settings
- script - JavaScript reference. Either a external reference, or inline
- include	- External content reference
- body - The entire content body of the page
- header - Header of the main content
- footer	- Footer of the main content
- nav	- Navigational inputs
- main	- Main content of the page
- section	- A section of the main content
- aside	- Aside content from the main content
- div	- A block division of content
- span	- An inline span of content
- h<1-9>	- Text heading. From h1, the highest level, down to h9, the lowest level
- p	- A paragraph of text
- b	- Bring attention
- table	- Table
- tr - Table row
- th - Table header
- td - Table data
- ol,ul -	Ordered or unordered list
- li	- List item
- a	- Anchor the text to a hyperlink
- img	- Graphical image reference
- dialog	- Interactive component such as a confirmation
- form	- A collection of user input
- input- 	User input field
- audio	- Audio content ex: \<audio controls src="testAudio.mp3"></audio>
- video	- Video content
- svg	- Scalable vector graphic content
- iframe	- Inline frame of another HTML page

Special Characters
- & - \&amp;
- \< - \&lt;
- \> - \&gt;
- " - \&quot;
- ' - \&apos;
- &#128512; - \&#128512;

### CSS
Load fonts from Google using - @import url('https://fonts.googleapis.com/css?famiy=Quicksand');

flex-direction: column-reverse; would put the p elements in a column and flip it

Link CSS to HTML - \<link rel="stylesheet" href="name.css" />

Box model (outside in) - margin, border, padding, content
- Padding puts space around the content of selected elements

Combinators - with examples
- Descendant: body section - any section that is a descendant of a body
- Child: section > p - any p that is a direct child of a section
- General sibling: div ~ p - any p that has a div sibling
- Adjacent sibling: div + p - any p that has an adjacent div sibling

Selectors - examples
- class: p.summary { font-weight: bold }
- ID: #physics { font-weight: bold }
- Attribute: p[class='summary'] { color: red; }
- Pseudo (positional relationship, mouse interactions, etc): section:hover { color: purple; }

Animation
- keyframes: @keyframes - tell what CSS properties should be applied at different key points in the animation sequence
  - @keyframes demo { from { font-size: 0vh; } to {font-size: 20vh; } }
  
Responsive Design
- block: display the element with a width tha tfills its parent element - p or div has block display by default
- inline: Display the element with a width that is only has big as its content - b or span has inline as default
- flex: display the element's children in a flexible orientation
- grid: display the element's children in a grid orientation
- meta tag: the browser will not auto scale the page and will scale it to what you set
  - ex: \<meta name="viewport" content="width=device-width, initial-scale=1" />
- float: moves an element to the left or right of its container and allows inline elements to wrap around it
- @media: detects size and orientation of the device and applies changes to accomodate the change.

### JavaScript
Code Examples:

```
const f = y => ++y;
console.log(f(3))
output: 4
```
```
let a = ['cow', 'rat', 'fish'];
let b = a.filter(v => v.match(/A|f/i));
console.log(b);
output: ['rat', 'fish']
```
```
let a = ['cow', 'rat', 'fish'];
let b = a.reduce((a,v) => [a,v].join(':'));
console.log(b);
output: ['cow':'rat':'fish']
```
```
let a = [1, 2, 3];
let e = a.map(number => {
  return ('a' + number)
});
console.log(e);
output: ['a1', 'a2', 'a3']
```
```
document.querySelector('p').addEventListener('mouseover',console.log);
- adds a mouseover event listener to a p element
- is not document.querySelectorAll so it is not to all p elements
```
```
const p = new Promise((resplve, reject) => {
  setTimeout(() => {
    console.log('taco');
    resolve(true);
  }, 10000);
});
console.log('burger');

p
.then((result) => console.log('shake'))
.catch((e) => console.log('salad'))
.finally(() => console.log('noodles'))

console.log('fries');

output order: burger, fries, taco, shake, noodles
- there's no await so the fries is outputted before the taco finishes
```
```
const a = async function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {console.log('D'); resolve(true) }, 10000);
  })
}

try {
  console.log('A');
  await a();
  console.log('B');
} catch(e) {
  console.log('C');
}

output: A D B
```

console.log - output a log message
console.time (console.timeEnd) - output how long a piece of code is running
console.time - how many times a block of code is called

Valid JS functions: 
- const f = (x) => {}
- function f(x) {}
- const f = function(x) {}

How to include JS in HTML (examples):
- \<script>1+1</script>
- \<script src='main.js'/>
- \<div onclick='1+1' />

Object Types:
- Object - {a:3, b:'fish'}
- Function - function a() {} (see above)
- Date (calender date and times) - new Date('1995-12-17')
- Array - [3, 'fish']
- Map - new Map()
- JSON - {"a":3, "b":"fish"}

