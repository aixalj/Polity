import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SearchErrorProps {
  message: string;
}

export const SearchError: React.FC<SearchErrorProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
      <p className="text-gray-600 text-lg font-medium">{message}</p>
    </div>
  );
};