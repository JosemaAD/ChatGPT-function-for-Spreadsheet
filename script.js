// Introduce tu clave API Key
var API_KEY = 'API-KEY';

/**
 * Devuelve la respuesta desde la API de GPT-3
 *
 * @param {string} prompt 
 * @param {number} [max_tokens = 64] 
 * @return {string} 
 * 
 * Full credit to ChatGPT that created this script on my behalf ;-)
 *  
 */
function DisruptivosGPT(prompt,max_tokens = 64, temperature = 1) {
  // API & Payload
  var API_URL = 'https://api.openai.com/v1/completions';
  var payload = {
    'prompt': prompt,
    'model': 'text-davinci-003',
    'max_tokens': max_tokens,
    'top_p': 1,
    'temperature': temperature,
    'frequency_penalty': 0,
    'presence_penalty': 0
  };

  // Request
  var response = UrlFetchApp.fetch(API_URL, {
    'method': 'post',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_KEY
    },
    'payload': JSON.stringify(payload)
  });

  // Parsing
  var responseText = response.getContentText();
  var responseJson = JSON.parse(responseText);
  return responseJson['choices'][0]['text'];
}
