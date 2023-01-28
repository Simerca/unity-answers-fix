/**
 * @github Simerca
 */

const targetNode = document.body;
const config = { childList: true, subtree: true };
const callback = function(mutationsList) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if(node.nodeType === Node.ELEMENT_NODE) {
                    const answerBodyElements = node.getElementsByClassName("answer-body");
                    for (let i = 0; i < answerBodyElements.length; i++) {
                      answerBodyElements[i].innerHTML = functionWhoReplaceText(answerBodyElements[i].innerHTML);
                    }
                    const questionBodyElements = node.getElementsByClassName("question-body");
                    for (let i = 0; i < questionBodyElements.length; i++) {
                      questionBodyElements[i].innerHTML = functionWhoReplaceText(questionBodyElements[i].innerHTML);
                    }
                }
            });
        }
    }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

const answerBodyElements = document.body.getElementsByClassName("answer-body");
                    for (let i = 0; i < answerBodyElements.length; i++) {
                      answerBodyElements[i].innerHTML = functionWhoReplaceText(answerBodyElements[i].innerHTML);
                    }
                    const questionBodyElements = document.body.getElementsByClassName("question-body");
                    for (let i = 0; i < questionBodyElements.length; i++) {
                      questionBodyElements[i].innerHTML = functionWhoReplaceText(questionBodyElements[i].innerHTML);
                    }

// Add more regexes here !
/* It's a trick to force the browser to re-parse the HTML. */
// document.body.innerHTML = document.body.innerHTML

function functionWhoReplaceText(text)
{
    return text.replace(/t\$\$anonymous\$\$s/g, "this")
                    .replace(/T\$\$anonymous\$\$s/g, "This")
                    .replace(/t\$\$anonymous\$\$ng/g, "thing")
                    .replace(/t\$\$anonymous\$\$ngs/g, "things")
                    .replace(/T\$\$anonymous\$\$ng/g, "Thing")
                    .replace(/T\$\$anonymous\$\$ngs/g, "Things")
                    .replace(/C\$\$anonymous\$\$ld/g, "Child")
                    .replace(/c\$\$anonymous\$\$ld/g, "child")
                    .replace(/W\$\$anonymous\$\$le/g, "While")
                    .replace(/w\$\$anonymous\$\$le/g, "while")
                    .replace(/w\$\$anonymous\$\$ch/g, "which")
                    .replace(/W\$\$anonymous\$\$ch/g, "Which")
                    .replace(/ \$\$anonymous\$\$gh /g, " High ") // High with space
                    .replace(/be\$\$anonymous\$\$nd/g, "behind")
                    .replace(/Be\$\$anonymous\$\$nd/g, "Behind")
                    .replace(/orthograp\$\$anonymous\$\$c/g, "orthographic")
                    .replace(/ac\$\$anonymous\$\$eve/g, "achieve ")
                    .replace(/\$\$anonymous\$\$de/g, "hide")
                    .replace(/\$\$anonymous\$\$ghest/g, "highest")
                    .replace(/arc\$\$anonymous\$\$ve/g, "archive")
                    .replace(/\$\$anonymous\$\$athf/g, "Mathf")
                    .replace(/\$\$anonymous\$\$in/g, "Min")
                    .replace(/p\$\$anonymous\$\$cs/g, "phics") // Graphics
                    .replace(/\$\$anonymous\$\$erarchy/g, "hierarchy");
}