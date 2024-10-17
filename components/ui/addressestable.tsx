'use client';

import React from 'react';
import Image from 'next/image';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { FavoriteStar } from '@/components/ui/favoritestar';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Copy } from 'lucide-react';
import { blo } from 'blo';

interface Address {
  id: string;
  contact: string;
  network: string;
  asset: string;
  address: string;
  isFavorite: boolean;
}

interface AddressTableProps {
  addresses: Address[];
  onToggleFavorite: (id: string, isFavorite: boolean) => void;
}

export const AddressTable: React.FC<AddressTableProps> = ({ addresses, onToggleFavorite }) => {
  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    // You might want to add some visual feedback here, like a temporary "Copied!" message
  };

  return (
    <Table>
      <TableHeader className="bg-gray-100 rounded-xl">
        <TableRow className="border-none">
          <TableHead></TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Network</TableHead>
          <TableHead>Asset</TableHead>
          <TableHead>Address</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {addresses.map((address) => (
          <TableRow key={address.id} className="border-none hover:bg-gray-50">
            <TableCell className="w-10">
              <FavoriteStar 
                initialState={address.isFavorite}
                onToggle={(isFavorite) => onToggleFavorite(address.id, isFavorite)}
              />
            </TableCell>
            <TableCell>{address.contact}</TableCell>
            <TableCell>{address.network}</TableCell>
            <TableCell>{address.asset}</TableCell>
            <TableCell className="font-mono">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    alt={address.address}
                    src={blo(`0x${address.address.slice(2)}`)}
                    width={24}
                    height={24}
                  />
                </div>
                <span className="underline underline-offset-4">
                  {address.address}
                </span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleCopyAddress(address.address)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy address</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </TableCell>
            <TableCell>
              <Button variant="outline" size="sm" className="mr-2">Edit</Button>
              <Button variant="outline" size="sm">View</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};