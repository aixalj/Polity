import { useRouter, useSearchParams } from 'next/navigation'; // Import useSearchParams
import { useEffect, useState } from 'react';
import { fetchContactById } from '@/lib/api'; // Ensure this function is implemented
import ViewContactComponent from '@/components/ui/viewContact'; // Adjust the import path as necessary

// Define the type for the contact
interface ContactType {
  id: string;
  name: string;
  email: string;
  // Add other properties as needed
}

interface ViewContactProps {
  contact: ContactType; // Define the prop type
}

const ViewContact: React.FC<ViewContactProps> = ({ contact }) => {
  return (
    <div>
      <h1>{contact.name}</h1>
      <p>Email: {contact.email}</p>
      {/* Render other contact details as needed */}
    </div>
  );
};

const ViewContactPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get search parameters
  const id = searchParams.get('id'); // Get the contact ID from the URL

  const [contact, setContact] = useState<ContactType | null>(null); // Specify the state type

  useEffect(() => {
    if (id) {
      fetchContactById(id).then(setContact); // Fetch the contact data
    }
  }, [id]);

  if (!contact) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  return <ViewContact contact={contact} />; // Pass the fetched contact to the ViewContact component
};

export default ViewContactPage;