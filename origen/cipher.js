window.cipher = {
  encode: (offset, string) => {
    /* Acá va tu código que cifra*/
    	function caesarCipherEncryptor(string, key) {  	   const newLetters = [];  	   const adjustedKey = key % 26; 
 	 
 
 	   for (const letter of string) { 
 	      let newLetter = (letter.charCodeAt() + adjustedKey)  	      if (newLetter <= 122) { 
 	         newLetters.push(String.fromCharCode(newLetter)); 
 	      } else if (newLetter > 122) { 
 	         newLetters.push(String.fromCharCode(96 + (newLetter % 122))); 
 	      } 
 	   } 
 	   return newLetters.join('') 
 	} 

  },
  decode: (offset, string) => {
    /* Acá va tu código que descifra
    	function caesarCipherEncryptor(string, key) {  	   const newLetters = [];  	   const adjustedKey = key % 26; 
 	 
 
 	   for (const letter of string) { 
 	      let newLetter = (letter.charCodeAt() + adjustedKey)  	      if (newLetter <= 122) { 
 	         newLetters.push(String.fromCharCode(newLetter)); 
 	      } else if (newLetter > 122) { 
 	         newLetters.push(String.fromCharCode(96 + (newLetter % 122))); 
 	      } 
 	   } 
 	   return newLetters.join('') 
 	} 

  }
 
};
