class BotMessages {

    static START_MESSAGE = `
    Jeg er Handleliste Bot. Jeg organiserer innkjøpslister.

    For å legge til en vare, skriv "/+ varenavn", uten anførselstegn.
    Jeg godtar flere varer separert med komma også! For eksempel: "/+ potet, bønner, gulrot". 

    Tilgjengelige kommandoer:
    /+ vare
    /- vare
    /vis liste
    /slett liste
    /gjennopprett liste
    /help
    `;

    static HELP_MESSAGE = `
    Tilgjengelige kommandoer:
    /+ vare
    /- vare
    /vis liste
    /slett liste
    /gjennopprett liste
    /help
    `;
}

module.exports = BotMessages;
