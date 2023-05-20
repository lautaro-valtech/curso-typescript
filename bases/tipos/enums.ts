/* 
  Los enum son un tipo de dato que te permite crear
  un conjunto de constantes de una manera más ordenada.
*/

(() => {
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  let currentAudio: AudioLevel = AudioLevel.max;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
