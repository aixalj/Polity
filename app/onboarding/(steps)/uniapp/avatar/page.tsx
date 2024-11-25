"use client";

import { useState } from "react";
import OnboardingBlock from "@/components/onboardingblock";
import { File02, Users03, Image03, X } from "@untitled-ui/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Agreement() {
  const [avatarName, setAvatarName] = useState("");
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

  return (
    <OnboardingBlock
      icon={<Users03 className="w-8 h-8 text-gray-700" />}
      title="Create your Avatar Identity"
      description="Choose a name and upload an image that represent your Avatar."
      button1link="/onboarding/uniapp/verification"
      button1text="Back"
      button2link="/onboarding/uniapp/nsp"
      button2text="Continue"
    >
      <div className="px-6 py-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label>Avatar Name</Label>
          <Input
            placeholder="AristoInvest"
            value={avatarName}
            onChange={(e) => setAvatarName(e.target.value)}
          />
          <p className="text-sm text-gray-600">
            An Avatar Name is unique across the network.
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label>Avatar Image</Label>
          <p className="text-sm text-gray-600">
            Upload an image for your Avatar.
          </p>
          <div className="flex flex-col gap-3">
            {!previewUrl && (
              <label
                className="w-40 h-40 border cursor-pointer border-gray-200 rounded-2xl flex items-center justify-center"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full">
                    <Image03 className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-primary-500 text-sm font-semibold">
                      Click to upload
                    </p>
                    <p className="text-xs text-gray-600">or drag and drop</p>
                  </div>
                </div>
              </label>
            )}

            {previewUrl && (
              <div className="relative w-40 h-40 group">
                <img
                  src={previewUrl}
                  alt="Avatar preview"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute hidden group-hover:flex items-center justify-center top-2 right-2 w-8 h-8 bg-gray-900/60 rounded-full hover:bg-gray-900/80 transition-all"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </OnboardingBlock>
  );
}
