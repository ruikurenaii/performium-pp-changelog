const htmlContent = marked.parse(markdown);
document.getElementById("content").innerHTML = htmlContent;