'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ViewContact } from '@/components/ui/viewContact';
import { fetchContactById } from '@/lib/api'; // You'll need to implement this function

export default function ContactPage() {
  const router = useRouter();
  const { id } = router.query;
  const [contact, setContact] = useState(null)

  useEffect(() => {
    if (id) {
      fetchContactById(id as string).then(setContact);
    }
  }, [id]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <ViewContact
      contact={contact}
      onEdit={(contactId) => {
        // Implement edit logic or navigation
      }}
      onBack={() => router.push('/addressbook')}
      onToggleFavorite={(contactId) => {
        // Implement toggle favorite logic
      }}
    />
  );
}