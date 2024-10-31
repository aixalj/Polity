import React from 'react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 pt-4 flex items-center justify-between">
      <Button 
        variant="secondary" 
        className='text-gray-700 bg-white border border-gray-300/50'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <span className="text-sm text-gray-700">
        Showing {startItem}-{endItem} of {totalItems}
      </span>
      <Button 
        variant="secondary"
        className='text-gray-700 bg-white border border-gray-300/50'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </div>
  );
}