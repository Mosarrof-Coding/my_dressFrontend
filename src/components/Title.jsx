/* eslint-disable react/prop-types */
export default function Title({ text1, text2 }) {
  return (
    <div className="inline-flex items-center gap-2 mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2">
      <h4 className="uppercase">
        {text1} <span className="text-blue-800">{text2}</span>
      </h4>
    </div>
  );
}
