module.exports = function createDreamTeam(members) {
  let result=[];
  if (Array.isArray(members) && members.length > 0){
    for (let i of members){
      if (typeof i == 'string'){
        result.push(i.toUpperCase().match(/[a-z]/i));
      }
    }       
    return result.sort().join('');
  }
  return false;
};
