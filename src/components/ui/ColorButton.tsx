import React from 'react'

type Props = {
  text: string;
  onClick: () => void;
  size: 'smail' | 'big';
}

const ColorButton = ({text, onClick, size = 'smail'}: Props) => {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[.15rem]
      ${size === 'big' ? 'p-[.3rem]' : 'p-[.15rem]'}`}
    >
      <button
        className={`bg-white rounded-sm text-base p-[.3rem] hover:opacity-90 transition-opacity
        ${size === 'big' ? 'p-4 text-2xl' : 'p-[.3rem] text-base'}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

export default ColorButton