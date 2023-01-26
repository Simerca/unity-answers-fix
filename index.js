/**
 * @github Simerca
 */

// Add more regexes here !
document.body.innerHTML = document.body.innerHTML.replace(/t\$\$anonymous\$\$s/g, "this")
                                                .replace(/C\$\$anonymous\$\$ld/g, "Child")
                                                .replace(/c\$\$anonymous\$\$ld/g, "child")
                                                .replace(/\$\$anonymous\$\$erarchy/g, "hierarchy");