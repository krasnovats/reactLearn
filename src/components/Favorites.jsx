import { differens } from '../data';
import Button from './Button/Button';
import { useState } from 'react';

export default function MyComponent() {
  const [contentType, setContent] = useState(null);

  function handleClick(type) {
    setContent(type);
  }

  return (
    <div>
      <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>
        Подход
      </Button>
      <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>
        Доступность
      </Button>
      <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>
        Концентрация
      </Button>

      {contentType ? <p>{differens[contentType]}</p> : <p>Нажми</p>}
    </div>
  );
}

//1.50