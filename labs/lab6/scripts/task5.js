const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTweetsTagStats = (tweets) => {
    const stats = {};
    
    for (const tweet of tweets) {
        for (const tag of tweet.tags) {
            if (stats[tag]) {
                stats[tag]++;
            } else {
                stats[tag] = 1;
            }
        }
    }
    
    return stats;
};

console.log('Result:', getTweetsTagStats(tweets));