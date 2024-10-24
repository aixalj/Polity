import { NextResponse } from 'next/server';
import { contacts } from '@/components/ui/addressbookData'; // Adjust the import based on your structure

// Handle GET requests to fetch a contact by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  // Find the contact by ID
  const contact = contacts.find((contact) => contact.id === id);

  if (contact) {
    return NextResponse.json(contact); // Return the contact data as JSON
  } else {
    return NextResponse.json({ message: 'Contact not found' }, { status: 404 }); // Return 404 if not found
  }
}

// Function to fetch a contact by ID from the frontend
export async function fetchContactById(id: string) {
  const response = await fetch(`/api/contacts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch contact');
  }
  return response.json(); // Return the contact data
}