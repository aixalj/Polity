import React from 'react';
import { AlertCircle } from 'lucide-react';

interface SearchErrorProps {
  message: string;
}

export const SearchError: React.FC<SearchErrorProps> = ({ message }) => {
  return (
    <div className="flex items-center justify-center p-4 bg-red-50 border border-red-200 rounded-md">
      <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
      <p className="text-red-700 text-sm">{message}</p>
    </div>
  );
};