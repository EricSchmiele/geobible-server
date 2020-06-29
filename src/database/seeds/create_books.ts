import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('books').insert([
        // Pentateuco
        { name: 'Genesis', ref: 'Ge', n_chapters: 50, old_testament: true },
        { name: 'Exodus', ref: 'Ex', n_chapters: 40, old_testament: true },
        { name: 'Leviticus', ref: 'Le', n_chapters: 27, old_testament: true },
        { name: 'Numbers', ref: 'Nu', n_chapters: 36, old_testament: true },
        { name: 'Deuteronomy', ref: 'De', n_chapters: 34, old_testament: true },
        // Históricos
        { name: 'Joshua', ref: 'Jos', n_chapters: 24, old_testament: true },
        { name: 'Judges', ref: 'Ju', n_chapters: 21, old_testament: true },
        { name: 'Ruth', ref: 'Ru', n_chapters: 4, old_testament: true },
        { name: '1 Samuel', ref: '1 S', n_chapters: 31, old_testament: true },
        { name: '2 Samuel', ref: '2 S', n_chapters: 24, old_testament: true },
        { name: '1 Kings', ref: '1 K', n_chapters: 22, old_testament: true },
        { name: '2 Kings', ref: '2 K', n_chapters: 25, old_testament: true },
        { name: '1 Chronicles', ref: '1 Chr', n_chapters: 29, old_testament: true },
        { name: '2 Chronicles', ref: '2 Chr', n_chapters: 36, old_testament: true },
        { name: 'Ezra', ref: 'Ezr', n_chapters: 10, old_testament: true },
        { name: 'Nehemiah', ref: 'Ne', n_chapters: 13, old_testament: true },
        { name: 'Esther', ref: 'Est', n_chapters: 10, old_testament: true },
        // Poéticos
        { name: 'Job', ref: 'Jb', n_chapters: 42, old_testament: true },
        { name: 'Psalms', ref: 'Ps', n_chapters: 150, old_testament: true },
        { name: 'Proverbs', ref: 'Pr', n_chapters: 31, old_testament: true },
        { name: 'Ecclesiastes', ref: 'Ec', n_chapters: 12, old_testament: true },
        { name: 'Song of Songs', ref: 'Song', n_chapters: 8, old_testament: true },
        // Profetas maiores
        { name: 'Isaiah', ref: 'Is', n_chapters: 66, old_testament: true },
        { name: 'Jeremiah', ref: 'Je', n_chapters: 52, old_testament: true },
        { name: 'Lamentations', ref: 'La', n_chapters: 5, old_testament: true },
        { name: 'Ezekiel', ref: 'Ez', n_chapters: 48, old_testament: true },
        // Profetas menores
        { name: 'Daniel', ref: 'Da', n_chapters: 12, old_testament: true },
        { name: 'Hosea', ref: 'Ho', n_chapters: 14, old_testament: true },
        { name: 'Joel', ref: 'Joel', n_chapters: 3, old_testament: true },
        { name: 'Amos', ref: 'Am', n_chapters: 9, old_testament: true },
        { name: 'Obadiah', ref: 'Obad', n_chapters: 1, old_testament: true },
        { name: 'Jonah', ref: 'Jona', n_chapters: 4, old_testament: true },
        { name: 'Micah', ref: 'Mi', n_chapters: 7, old_testament: true },
        { name: 'Nahum', ref: 'Na', n_chapters: 3, old_testament: true },
        { name: 'Habakkuk', ref: 'Ha', n_chapters: 3, old_testament: true },
        { name: 'Zephaniah', ref: 'Zeph', n_chapters: 3, old_testament: true },
        { name: 'Haggai', ref: 'Hagg', n_chapters: 2, old_testament: true },
        { name: 'Zechariah', ref: 'Zech', n_chapters: 14, old_testament: true },
        { name: 'Malachi', ref: 'Ma', n_chapters: 4, old_testament: true },
        // Evangélios
        { name: 'Matthew', ref: 'Mt', n_chapters: 28, old_testament: false },
        { name: 'Mark', ref: 'Mak', n_chapters: 16, old_testament: false },
        { name: 'Luke', ref: 'Lk', n_chapters: 24, old_testament: false },
        { name: 'John', ref: 'Jn', n_chapters: 21, old_testament: false },
        // Atos
        { name: 'Acts', ref: 'Ac', n_chapters: 28, old_testament: false },
        // Cartas de Paulo
        { name: 'Romans', ref: 'Ro', n_chapters: 16, old_testament: false },
        { name: '1 Corinthians', ref: '1 Co', n_chapters: 16, old_testament: false },
        { name: '2 Corinthians', ref: '2 Co', n_chapters: 13, old_testament: false },
        { name: 'Galatians', ref: 'Ga', n_chapters: 6, old_testament: false },
        { name: 'Ephesians', ref: 'Ep', n_chapters: 6, old_testament: false },
        { name: 'Philippians', ref: 'Phl', n_chapters: 4, old_testament: false },
        { name: 'Colossians', ref: 'Co', n_chapters: 4, old_testament: false },
        { name: '1 Thessalonians', ref: '1 Th', n_chapters: 5, old_testament: false },
        { name: '2 Thessalonians', ref: '2 Th', n_chapters: 3, old_testament: false },
        { name: '1 Timothy', ref: '1 Ti', n_chapters: 6, old_testament: false },
        { name: '2 Timothy', ref: '2 Ti', n_chapters: 4, old_testament: false },
        { name: 'Titus', ref: 'Tit', n_chapters: 3, old_testament: false },
        { name: 'Philemon', ref: 'Phm', n_chapters: 1, old_testament: false },
        { name: 'Hebrews', ref: 'He', n_chapters: 13, old_testament: false },
        // Outras cartas
        { name: 'James', ref: 'Ja', n_chapters: 5, old_testament: false },
        { name: '1 Peter', ref: '1 Pe', n_chapters: 5, old_testament: false },
        { name: '2 Peter', ref: '2 Pe', n_chapters: 3, old_testament: false },
        { name: '1 John', ref: '1 Jhn', n_chapters: 5, old_testament: false },
        { name: '2 John', ref: '2 Jhn', n_chapters: 1, old_testament: false },
        { name: '3 John', ref: '3 Jhn', n_chapters: 1, old_testament: false },
        { name: 'Jude', ref: 'Jude', n_chapters: 1, old_testament: false },
        // Apocalipse
        { name: 'Revelation', ref: 'Re', n_chapters: 22, old_testament: false },
    ]);
}