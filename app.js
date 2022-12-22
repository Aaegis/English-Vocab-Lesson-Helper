// 'shuffle' is defined from an external library. See the HTML file to see where it's loaded.

const vocabWords = [
    "Alliteration", "Allusion", "Amplification", "Analogy", "Anaphora",
    "Antanagoge", "Antimetabole", "Antiphrasis", "Appositive", "Enumeratio",
    "Epanalepsis", "Epithet", "Epizeuxis", "Hyperbole", "Litotes",
    "Metanoia", "Metaphor", "Metonymy", "Onomatopoeia", "Oxymoron",
    "Parallelism", "Simile"
];

const button = () => document.getElementById("generateButton");
const cpButton = () => document.getElementById("copyButton");
const wordArea = () => document.getElementById("wordTextarea");

const copy = () => navigator.clipboard.writeText(wordArea().value);

const update = function () {
    wordArea().innerHTML = shuffle(vocabWords).join(" \n");
};


document.addEventListener("DOMContentLoaded", update);
button().onclick = update;
cpButton().onclick = copy;