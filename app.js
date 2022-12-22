// 'shuffle' is defined from an external library. See the HTML file to see where it's loaded.

const vocabWords = [ // Put vocab words here
    "Alliteration", "Allusion", "Amplification", "Analogy", "Anaphora",
    "Antanagoge", "Antimetabole", "Antiphrasis", "Appositive", "Enumeratio",
    "Epanalepsis", "Epithet", "Epizeuxis", "Hyperbole", "Litotes",
    "Metanoia", "Metaphor", "Metonymy", "Onomatopoeia", "Oxymoron",
    "Parallelism", "Simile"
];

const button = () => document.getElementById('generateButton');

const wordArea = () => document.getElementById('generateButton');

const update = function () {
    wordArea().value = shuffle(vocabWords);
}