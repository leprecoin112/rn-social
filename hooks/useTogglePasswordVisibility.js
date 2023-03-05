import { useState } from 'react';
export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightText, setRightText] = useState('Показати');

  const handlePasswordVisibility = () => {
    if (rightText === 'Показати') {
      setRightText('Приховати');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightText === 'Приховати') {
      setRightText('Показати');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightText,
    handlePasswordVisibility,
  };
};
