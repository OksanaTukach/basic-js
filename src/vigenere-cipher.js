
class VigenereCipheringMachine {
    constructor(direct) {
        this.direct = direct;
    }
    encrypt(message, key) {
        message = message.toUpperCase();
        key = key.toUpperCase();
        while(key.length<message.length){
          key+=key;
        }
        let messageWord='';
        let keyWord='';
        let indexKey=0;
        let result='';
        let j=0;
        for(let i=0;i<message.length;i++){
            if(!/[A-Z]/.test(message[i])){
              result+=message[i];
              continue;
            }
            messageWord=message[i].charCodeAt();
            keyWord=key[j].charCodeAt();
            indexKey=messageWord+keyWord-65;
            if(indexKey>90){
              indexKey-=26;
            }
            j++;
            result+=String.fromCharCode(indexKey);
        }
        if (this.direct === false) {
            return result.split('').reverse().join('');
        }
        return result;
    }

    decrypt(encryptedMessage, key) {
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
        while(key.length<encryptedMessage.length){
            key+=key;
          }
          let encryptedMessageWord='';
          let keyWord='';
          let indexKey=0;
          let result='';
          let j=0;
          for(let i=0;i<encryptedMessage.length;i++){
              if(!/[A-Z]/.test(encryptedMessage[i])){
                result+=encryptedMessage[i];
                continue;
              }
              encryptedMessageWord=encryptedMessage[i].charCodeAt();
              keyWord=key[j].charCodeAt();
              indexKey=encryptedMessageWord-keyWord+65;
              if(indexKey<65){
                indexKey+=26;
              }
              j++;
              result+=String.fromCharCode(indexKey);
          }  
        if (this.direct === false) {
            return result.split('').reverse().join('');
        }
        return result;
    }
}

module.exports = VigenereCipheringMachine;