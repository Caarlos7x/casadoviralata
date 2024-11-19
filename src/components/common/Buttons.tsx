import React from 'react';
import './ButtonStyles.css';
import { IonSpinner } from '@ionic/react';

interface CustomButtonProps {
  type: 'primary' | 'secondary' | 'success' | 'danger' | 'link' | 'adopt';
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ type, children, onClick, disabled, loading }) => {
  const getClassName = () => {
    switch (type) {
      case 'primary':
        return 'btn-primary';
      case 'secondary':
        return 'btn-secondary';
      case 'success':
        return 'btn-success';
      case 'danger':
        return 'btn-danger';
      case 'link':
        return 'btn-link';
      case 'adopt':
        return 'btn-adopt';
      default:
        return 'btn-primary';
    }
  };

  return (
    <button className={getClassName()} onClick={onClick} disabled={disabled || loading}>
      {loading ? <IonSpinner name="crescent" /> : children}
    </button>
  );
};

export default CustomButton;
