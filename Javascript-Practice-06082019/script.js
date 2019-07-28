// How to Design Solutions to Problems

// SHUFFLE A DECK OF CARDS

// 1. make a representation of a deck of cards
    //  - to shuffle, the cards' position & order must change
    //  - arrays are good for representing position & order
    //   NOTE: a standard deck is 52 cards:
    //  - 2-9, plus Jack, Queen, King, Ace
    //  - 4 suits: Spade, Heart, Diamond, Club

// Practice: Make an array containing the cards in a standard deck.  Each card should contain its value and its suit.  Example formats:
    // "JH" --> Jack of Hearts
    // { value: "Jack", suit: "Heart" }
    // First, make an array of values.
    // Then, make an array of suits.
    // Then, combine those two arrays together.


    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suits = ["spades", "diamonds", "clubs", "hearts"];
    let deck = [];
    
    function getDeck() {
        for(var i = 0; i < suits.length; i++) {
    
        for(var j = 0; j < values.length; j++) {
    
         var card = {Value: values[j], Suit: suits[i]};
         deck.push(values[j] + " of " + suits[i]);                              
         // push new value into deck 
        }
      }
      // console.log(deck);
      // console.log(deck.length + " cards");
    }
    
    
    // 2. solve the problem for a small part, then generalize it (inductive reasoning)
        //  - how do we shuffle one card?
        //  - if we can shuffle one card, how do we shuffle all cards? 
        // Practice: shuffle the deck of cards
    
        /** HINT: for loop to iterate through entire deck, select and place a random card into the new array, */
        
      /** HINT: create a new array for newly shuffled deck, randomly take one card from the old array and place it in the new array, math.random to shuffle from a random position,  */
    
    // function shuffle () {
    //     // switch the values of two random cards
    //     let cardPosition1 = Math.floor(Math.random() * deck.length);
    //     let cardPosition2 = Math.floor(Math.random() * deck.length);
    //       // shuffle.push(deck[cardPosition1]);
    //       console.log(deck[cardPosition2] = deck[shuffle]);
    // }
    
    
    function shuffleDeck () {
      let newDeck = [];
    
      for(let i = 0; i < deck.length; i++) {
        let randomPosition = Math.floor(Math.random() * deck.length);
        // if(newDeck[randomPosition])
        newDeck[randomPosition] = deck[i];
      }
    
      return newDeck;
    }
    
    getDeck();
    console.log(shuffleDeck());
    
    
    
    
    // MUSICAL CHAIRS
    
    // array of players
    // array of chairs or number of chairs?
    // function to place players in chairs & return remaining player
    //  - select a random player to sit in a chair
    //  - do this for all but one player
    // remove player from array of players
    // decrease the number of chairs
    // repeat until there is one player left
    
    // Practice: let's do each of these parts in turn
    