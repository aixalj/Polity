'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import PolityLogo from '@/public/polity.svg';
import Avatar from '@/public/Avatar.png';
import AvatarDefault from '@/public/Avatar-Image-Upload.svg';
import AvatarChange from '@/public/Avatar-Change.svg';
import PlatoInvest from '@/public/PlatoInvest.png';
import {
  UserPlus01,
  Edit01,
  Users03,
  Image03,
  X,
} from '@untitled-ui/icons-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';

const SHOW_PENDING = false; // Toggle this to control visibility

export default function InvestorPortal() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [avatarName, setAvatarName] = useState('AristoInvest');
  const [avatarImage, setAvatarImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setAvatarImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleRemoveImage = () => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setAvatarImage(null);
    setPreviewUrl(null);
  };

  const handleSave = () => {
    // Handle save logic here
    setIsEditModalOpen(false);
  };

  return (
    <main className='w-full h-full flex bg-white flex-col items-center min-h-screen overflow-auto '>
      <div className='flex flex-col items-left gap-4 border-b border-gray-200/80 w-full py-5 px-24 bg-white'>
        <Image src={PolityLogo} alt='Polity Logo' />
      </div>
      <div className='flex flex-col items-center gap-1 pt-20'>
        <h1 className='text-2xl font-medium'>Client Portal</h1>
        <p className='text-sm text-gray-600'>
          Click on your Avatar to enter your Avatar Dashboard.
        </p>
        <p className='text-sm text-gray-600 mb-10'> Upgrade to SuperApp to create multiple avatars.</p>

        <div className='flex items-center gap-6'>
          {/* Connected Avatar */}
          <div className='relative'>
            <Link href='/'>
              <div className='border border-gray-300 hover:border-gray-300 hover:shadow-sm transition-all duration-200 rounded-2xl py-10 px-14 flex flex-col items-center gap-2 cursor-pointer group relative'>
                <div className='w-16 h-16 rounded-[10px] border border-gray-200 overflow-hidden'>
                  <Image src={Avatar} alt='Avatar' width={64} height={64} />
                </div>
                <p className='font-medium'>AristoInvest</p>
                <div className='flex items-center gap-1 text-xs font-medium text-[#05603A] bg-[#D1FADF] border border-[#A6F4C5] rounded-[5px] px-2 py-1'>
                  <span className='w-2 h-2 rounded-full bg-[#05603A] mr-0.5' />
                  <span className='text-[#05603A]'>Connected</span>
                </div>
                <div className='absolute bottom-0 left-1/2 w-3/4 h-[4px] bg-primary-400 rounded-[4px] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 -translate-x-1/2' />
              </div>
            </Link>
            <button
              onClick={() => setIsEditModalOpen(true)}
              className='absolute top-2 right-3 flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors'
            >
              <Edit01 className='w-3 h-3' />
              <span className='text-sm font-medium'>Edit</span>
            </button>
          </div>

         {/* <Link href='/onboarding/superapp/nsp'>
            <div className=' border border-gray-300 hover:border-gray-300 hover:shadow-sm transition-all duration-200 rounded-2xl py-10 px-14 flex flex-col items-center gap-2 cursor-pointer group relative'>
              <div className='w-16 h-16 rounded-[10px] border border-gray-200 overflow-hidden'>
                <Image
                  src={PlatoInvest}
                  alt='PlatoInvest'
                  width={64}
                  height={64}
                />
              </div>
              <p className='font-medium'>PlatoInvest</p>
              <TooltipProvider>
                <Tooltip delayDuration={50}>
                  <TooltipTrigger>
                    <div className='flex items-center gap-1 text-xs font-medium text-amber-800 bg-amber-100 border border-amber-200 rounded-[5px] px-2 py-1'>
                      <span className='w-2 h-2 rounded-full bg-amber-800 animate-pulse mr-0.5' />
                      <span className='text-amber-800'>Pending</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side='bottom'
                    sideOffset={10}
                    className='bg-[#0F172A] text-white border-none px-3 py-2 w-[260px] text-xs font-semibold text-center'
                  >
                    <div className='absolute left-1/2 top-0 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-[#0F172A] -translate-x-1/2 -translate-y-full' />
                    <p className='text-xs font-semibold'>
                      Complete your avatar setup to access your investment
                      dashboard.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className='absolute bottom-0 left-1/2 w-3/4 h-[4px] bg-amber-500 rounded-[4px] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 -translate-x-1/2' />
            </div>
          </Link>
          <div className=' border border-gray-300 bg-gray-50 h-full w-full justify-center hover:border-gray-300 hover:shadow-sm transition-all duration-200 rounded-2xl py-10 px-14 flex flex-col items-center gap-2 cursor-pointer group relative'>
            <Link href='/onboarding/select-your-account'>
              <div className='flex flex-col items-center gap-2'>
                <UserPlus01 className='w-8 h-8' />
                <span className='text-md font-semibold text-gray-700'>
                  New Avatar
                </span>
              </div>
            </Link>
          </div> */}
        </div>
      </div>

      {/* Edit Avatar Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className='sm:max-w-[640px] rounded-3xl'>
          <DialogHeader>
            <div className='flex flex-col items-start gap-3'>
              <Users03 className='w-8 h-8 text-gray-700' />
              <div className='flex flex-col items-start gap-1'>
                <DialogTitle className='text-xl font-medium text-gray-900'>
                  Edit your Avatar Identity
                </DialogTitle>
                <DialogDescription className='text-sm text-gray-600 font-regular'>
                  Edit your name and image that represent your Avatar.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className='border-b border-gray-200/80 -mx-6'> </div>

          <div className='px-6 py-4 flex flex-col gap-4'>
            <div className='flex flex-col gap-1.5'>
              <Label>Avatar Name</Label>
              <Input
                placeholder='AristoInvest'
                value={avatarName}
                onChange={(e) => setAvatarName(e.target.value)}
              />
              <p className='text-sm text-gray-600'>
                An Avatar Name is unique across the network.
              </p>
            </div>
            <div className='flex flex-col gap-1.5'>
              <Label>Avatar Image</Label>
              <p className='text-sm text-gray-600'>
                Upload an image for your Avatar.
              </p>
              <div className='flex flex-col gap-3'>
                <label
                  className='w-40 h-40 cursor-pointer flex items-center justify-center relative overflow-hidden group'
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <input
                    type='file'
                    className='hidden'
                    accept='image/*'
                    onChange={handleFileChange}
                  />
                  {/* Default avatar - visible by default */}
                  <Image
                    src={AvatarDefault}
                    alt='Current Avatar'
                    width={180}
                    height={180}
                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0'
                  />
                  {/* Hover avatar - hidden by default, visible on hover */}
                  <Image
                    src={AvatarChange}
                    alt='Avatar Change'
                    width={180}
                    height={180}
                    className='absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100'
                  />
                </label>

                {previewUrl && (
                  <div className='relative w-40 h-40 group'>
                    <Image
                      src={previewUrl}
                      alt='Avatar preview'
                      width={160}
                      height={160}
                      className='w-full h-full object-cover rounded-2xl'
                    />
                    <button
                      onClick={handleRemoveImage}
                      className='absolute hidden group-hover:flex items-center justify-center top-2 right-2 w-8 h-8 bg-gray-900/60 rounded-full hover:bg-gray-900/80 transition-all'
                    >
                      <X className='w-4 h-4 text-white' />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='flex justify-end px-6 pb-6 w-full'>
            <Button
              onClick={handleSave}
              variant='default'
              className='px-6 py-2 rounded-lg font-medium w-full'
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
