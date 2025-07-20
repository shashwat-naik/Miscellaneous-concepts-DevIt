// Q1 Make a object keeping the real life things in your mind.

let shop = {
  shirt: ["Cotton", "Linen", "Polyester"],
  pant: ["Cotton", "Linen", "Trousers"],
  jacket: ["Leather", "Rexine"],
  suit: ["Tuxedo", "2-piece"],
  men: function (type) {
    if (type === "formal") {
      return {
        shirt: ["Linen"],
        pant: ["Trouser"],
        suit: ["Tuxedo", "2-piece"],
        jacket: ["Leather"],
      };
    } else if (type === "casual") {
      return {
        shirt: ["Cotton", "Polyester"],
        pant: ["Cotton"],
        jacket: ["Rexine"],
      };
    } else {
      return 'Please specify either "formal" or "casual".';
    }
  },
};

console.log(shop.men("formal"));
console.log(shop.men("casual"));
