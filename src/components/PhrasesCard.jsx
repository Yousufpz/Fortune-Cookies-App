/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const PhrasesCard = ({ phraseRandom }) => {

  
  return (
    <div className="app__text border-2 bg-white border-cyan-600 text-gray-500 text-center rounded-lg p-5 mt-2 max-w-xs text-lg">
      <p>{phraseRandom.phrase}</p>
    </div>
  );

}

export default PhrasesCard;
