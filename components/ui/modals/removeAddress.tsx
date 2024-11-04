import React, { useState } from "react";
import ContactRemovedSaved from "../saved modals/contactRemovedSaved"; // Import the ContactRemovedSaved modal
import Image from "next/image";
import { X, Trash2, Copy } from "lucide-react"; // Import the Copy icon
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import ETHNetwork from "public/icons/networks/ETH.svg"; // Import network icons
import BTCNetwork from "public/icons/networks/BTC.svg";
import POLNetwork from "public/icons/networks/MATIC.svg";
import BTC from "cryptocurrency-icons/svg/color/btc.svg";
import ETH from "cryptocurrency-icons/svg/color/eth.svg";
import USDT from "cryptocurrency-icons/svg/color/usdt.svg";
import { Dialog, DialogContent } from "@/components/ui/dialog"; // Import Dialog component

interface RemoveAddressProps {
  isOpen: boolean;
  onClose: () => void; // Close the RemoveAddress modal
  onCancel: () => void; // Go back to the EditAddress modal
  onRemove: (addressId: string, callback: () => void) => void; // Handle address removal with a callback
  addressData: {
    id: string;
    contactName: string;
    addressname: string;
    network: string;
    asset?: string; // Make asset optional
    address: string;
  } | null;
}

const RemoveAddress: React.FC<RemoveAddressProps> = ({
  isOpen,
  onClose,
  onCancel,
  onRemove,
  addressData,
}) => {
  const [isRemovedModalOpen, setRemovedModalOpen] = useState(false); // State for ContactRemovedSaved modal
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null); // State for copied address

  if (!isOpen || !addressData) return null;

  const handleDelete = () => {
    onRemove(addressData.id, () => {
      setRemovedModalOpen(true); // Open the ContactRemovedSaved modal
      onClose(); // Close the RemoveAddress modal
    });
  };

  // Function to truncate the network address
  const truncateAddress = (address: string, maxLength: number) => {
    if (address.length > maxLength) {
      return `${address.slice(0, maxLength)}...`;
    }
    return address;
  };

  // Function to copy the address to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAddress(text);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const getNetworkIcon = () => {
    switch (addressData.network) {
      case "Ethereum Network":
        return (
          <Image
            src={ETHNetwork}
            alt="Ethereum Network"
            className="h-5 w-5 mr-2"
          />
        );
      case "Bitcoin Network":
        return (
          <Image
            src={BTCNetwork}
            alt="Bitcoin Network"
            className="h-5 w-5 mr-2"
          />
        );
      case "Polygon Network":
        return (
          <Image
            src={POLNetwork}
            alt="Polygon Network"
            className="h-5 w-5 mr-2"
          />
        );
      default:
        return null;
    }
  };

  const getAssetDetails = () => {
    if (!addressData.asset) return null; // Check if asset exists
    switch (addressData.asset.toLowerCase()) {
      case "bitcoin":
      case "btc":
        return { icon: BTC, name: "Bitcoin BTC" }; // Bitcoin details
      case "ethereum":
      case "eth":
        return { icon: ETH, name: "Ethereum ETH" }; // Ethereum details
      case "tether":
      case "usdt":
        return { icon: USDT, name: "Tether USDT" }; // Tether details
      default:
        return { icon: "/default-icon.svg", name: "Unknown Asset" }; // Default details
    }
  };

  const assetDetails = getAssetDetails();

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          lightCloseIcon
          className="bg-rose-600 p-1 rounded-2xl shadow-xl max-w-[90%] w-[410px] h-auto flex flex-col "
        >
          <div className="px-8 pt-5 flex-shrink-0">
            <div className="flex justify-start mb-2">
              <Trash2 className="h-6 w-6 text-gray-50" />
            </div>
            <h2 className="text-lg font-medium mb-1.5 text-gray-50">
              Remove Contact
            </h2>
            <p className="mb-4 text-gray-50 text-sm font-regular whitespace-nowrap">
              Are you sure you want to remove this contact?
              <br />
              This action cannot be undone.
            </p>
          </div>

          <div className="bg-white px-6 pt-4 pb-6 rounded-xl shadow-md flex-grow overflow-hidden">
            <div className="-mx-4 bg-gray-50 py-2 mb-1">
              <p className="text-xs font-medium text-gray-600 w-full pl-4">
                <strong>CONTACT DETAILS</strong>
              </p>
            </div>
            <p className="text-sm mb-2 w-full flex justify-between">
              <strong className="font-medium">Contact Name:</strong>{" "}
              <strong className="font-semibold ml-auto">
                {addressData.contactName}
              </strong>
            </p>
            <p className="text-sm mb-2 flex justify-between">
              <strong className="font-medium">Address Name:</strong>{" "}
              <strong className="font-semibold ml-auto">
                {addressData.addressname}
              </strong>
            </p>
            <p className="text-sm mb-2 flex justify-between items-center">
              <strong className="font-medium">Network:</strong>{" "}
              <strong className="font-semibold ml-auto flex items-center">
                {getNetworkIcon()}
                {addressData.network}
              </strong>
            </p>
            {assetDetails && (
              <p className="text-sm mb-2 flex justify-between items-center">
                <strong className="font-medium">Asset:</strong>{" "}
                <strong className="font-semibold ml-auto flex items-center">
                  <Image
                    src={assetDetails.icon}
                    alt={assetDetails.name}
                    className="h-5 w-5 mr-2"
                  />
                  {assetDetails.name}
                </strong>
              </p>
            )}
            <p className="text-sm mb-2 flex justify-between">
              <strong className="font-medium">Network Address:</strong>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span
                      className="flex items-center cursor-pointer"
                      onClick={() => copyToClipboard(addressData.address)}
                    >
                      <strong className="font-semibold ml-auto">
                        {truncateAddress(addressData.address, 20)}
                      </strong>
                      <Copy className="h-4 w-4 text-gray-600 ml-2" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{copiedAddress ? "Copied!" : "Click to copy"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </p>

            <div className="mt-6 flex justify-start space-x-4 w-full">
              <Button
                onClick={() => {
                  onCancel();
                  onClose();
                }}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-xl w-1/2 hover:bg-gray-50 hover:border-gray-50"
                variant="secondary"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  handleDelete(); // Call the function to open ContactRemovedSaved modal
                  setRemovedModalOpen(false); // Close RemoveAddress modal
                }}
                className="px-4 py-2 bg-rose-600 text-white w-1/2 rounded-xl hover:bg-rose-700"
                variant="destructive"
              >
                Delete
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Removed Saved Modal */}
      {isRemovedModalOpen && (
        <ContactRemovedSaved
          isOpen={isRemovedModalOpen}
          onClose={() => {
            setRemovedModalOpen(false);
            onClose(); // Close the RemoveAddress modal when the saved modal is closed
          }}
          contactName={addressData.contactName} // Pass contact name if needed
        />
      )}
    </>
  );
};

export default RemoveAddress;
