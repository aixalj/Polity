'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { FavoriteStar } from '@/components/ui/favoritestar';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Copy } from 'lucide-react';
import { blo } from 'blo';

export interface Address {
  id: string;
  contact: string;
  contactAvatar: string;
  network: string;
  asset: string;
  address: string;
  isFavorite: boolean;
}

interface AddressTableProps {
  addresses: Address[];
  onToggleFavorite: (id: string, isFavorite: boolean) => void;
}

export const initialAddresses: Address[] = [
  { 
    id: '1', 
    contact: 'John Doe', 
    contactAvatar: '/bastion.png',
    network: 'Ethereum', 
    asset: 'ETH', 
    address: '0x1234...5678', 
    isFavorite: false 
  },
  { 
    id: '2', 
    contact: 'Jane Smith', 
    contactAvatar: '/bastion.png', 
    network: 'Bitcoin', 
    asset: 'BTC', 
    address: 'bc1qxy...zuvw', 
    isFavorite: true 
  },
  // Add more addresses as needed
];

export const AddressTable: React.FC<AddressTableProps> = ({ addresses, onToggleFavorite }) => {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000); // Reset after 2 seconds
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
            <TableCell>
              <div className="flex items-center gap-2.5">
                <div className="rounded-full overflow-hidden bg-gray-200 w-6 h-6">
                  <Image
                    src={address.contactAvatar}
                    alt={address.contact}
                    width={24}
                    height={24}
                  />
                </div>
                <span className="font-medium">{address.contact}</span>
              </div>
            </TableCell>
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
                      <div className={`px-2 py-1 rounded ${copiedAddress === address.address ? 'bg-primary text-primary-foreground' : ''}`}>
                        {copiedAddress === address.address ? 'Copied!' : 'Copy address'}
                      </div>
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