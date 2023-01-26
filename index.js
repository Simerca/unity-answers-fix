/**
 * @github Simerca
 */

// Add more regexes here !
document.body.innerHTML = document.body.innerHTML.replace(/t\$\$anonymous\$\$s/g, "this")
                                                .replace(/T\$\$anonymous\$\$s/g, "This")
                                                .replace(/C\$\$anonymous\$\$ld/g, "Child")
                                                .replace(/c\$\$anonymous\$\$ld/g, "child")
                                                .replace(/W\$\$anonymous\$\$le/g, "While")
                                                .replace(/w\$\$anonymous\$\$le/g, "while")
                                                .replace(/\$\$anonymous\$\$erarchy/g, "hierarchy");