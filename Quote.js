'use strict';

const ROSS_QUOTES = [
    'It\'s the Holiday Armadillo!',
    'I tell you, when I actually die, some people are gonna get seriously haunted.',
    'I grew up Monica. If you don’t eat fast, you didn’t eat.',
    'We were on a BREAK!!',
    'Unagi is a state of total awareness. Only by achieving true unagi.. can you be prepared for any danger that may befall you.',
    'PIVOT!!',
    'The ROSSATRON',
    'I am this close to tugging on my testicles again.',
    'Once, I got dumped during sex!',
    'Hey!! I have been married three times.',
    'One.. Two.. Three… You have no idea how much this hurts!',
    'Ross: The divorce force!',
    'Why do bad things happen to good people?',
    'If you ever hurt my little sister, if you ever cause her any unhappiness of any kind, I will hunt you down and Kick your ass!!',
    'I, Ross.. take thee, Rachel..',
    'Did she get off the plane?'
];

module.exports = class Quote {
    getRandom() {
        return ROSS_QUOTES[Math.floor(Math.random() * ROSS_QUOTES.length)];
    }
};
