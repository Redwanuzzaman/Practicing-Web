// <body>
//   <h1 id="head1">This is Heading 1</h1>
//  <h2 class="head2">This is Heading 2</h2>
//  <p id="para1"><b>This is a paragraph</b></p>
//   <script src="dom-script.js"></script>
// </body>


document.querySelector("#head1").innerHTML = "for ID";  // to access by id
document.querySelector(".head2").innerHTML = "for CLASS"  // to access by class
document.querySelector("p").innerHTML = "for TAG"  // to access by tag name
