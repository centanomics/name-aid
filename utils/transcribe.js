const axios = require('axios');

const transcribe = async sentence => {
  const key = 'aa25a0f2-55f1-47ed-bf80-dccca1199bab';
  const terms = sentence.split(' ');
  let ipaTerms = [];
  for (let i = 0; i < terms.length; i++) {
    try {
      const res = await axios.get(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${terms[i]}?key=${key}`
      );
      ipaTerms.push(res.data[0].hwi.prs[0].mw);
    } catch (err) {
      ipaTerms.push(terms[i]);
    }
  }
  const ipaSentence = ipaTerms.join(' ');
  return ipaSentence;
};

module.exports = transcribe;
