function checkForSpam(message) {
    const normalizedMessage = message.toLowerCase();
    
    return normalizedMessage.includes('spam') || normalizedMessage.includes('sale');
}

console.log('String: "Latest technology news", Result:', checkForSpam("Latest technology news")    );
console.log('String: "Get best sale prices now!", Result:', checkForSpam("Get best sale prices now!"));
console.log('String: "Amazing SpaM offer", Result:', checkForSpam("Amazing SpaM offer"));
console.log('String: "How to write JS", Result:', checkForSpam("How to write JS"));
console.log('String: "Big SALE today", Result:', checkForSpam("Big SALE today"));