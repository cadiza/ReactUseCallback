import React, { useCallback, useEffect, useState } from 'react'
import './Square.css'


type SquareProps = {
  position: number;
  isActive?: boolean;
  key?: number;
  handleChange?: any;
}

const Square: React.FC<SquareProps> = ({ position, isActive = false, handleChange }) => {
  const [errorCount, setErrorCount] = useState(0);

  const KeyPress = useCallback((event: KeyboardEvent) => {
    if (event.repeat) return
    else if (parseInt(event.key) === position && isActive) {
      handleChange(position)
    }


  }, []);

  useEffect(() => {
    document.addEventListener("keydown", KeyPress);

    return () => {
      document.removeEventListener("keydown", KeyPress);
    };
  }, [KeyPress]);

  return (
    <div className={isActive ? 'square active' : 'square'}> {position}</div>
  )
}

export default Square