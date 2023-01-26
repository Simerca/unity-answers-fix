/**
 * @github Simerca
 */

// Add more regexes here !
document.body.innerHTML = document.body.innerHTML.replace(/t\$\$anonymous\$\$s/g, "this")
                                                .replace(/T\$\$anonymous\$\$s/g, "This")
                                                .replace(/t\$\$anonymous\$\$ng/g, "thing")
                                                .replace(/t\$\$anonymous\$\$ngs/g, "things")
                                                .replace(/T\$\$anonymous\$\$ng/g, "Thing")
                                                .replace(/T\$\$anonymous\$\$ngs/g, "Things")
                                                .replace(/C\$\$anonymous\$\$ld/g, "Child")
                                                .replace(/c\$\$anonymous\$\$ld/g, "child")
                                                .replace(/W\$\$anonymous\$\$le/g, "While")
                                                .replace(/w\$\$anonymous\$\$le/g, "while")
                                                .replace(/\$\$anonymous\$\$de/g, "hide")
                                                .replace(/arc\$\$anonymous\$\$ve/g, "archive")
                                                .replace(/\$\$anonymous\$\$athf/g, "Mathf")
                                                .replace(/\$\$anonymous\$\$in/g, "Min")
                                                .replace(/p\$\$anonymous\$\$cs/g, "phics") // Graphics
                                                .replace(/\$\$anonymous\$\$erarchy/g, "hierarchy");