export async function fetchContactById(id: string) {
    // Implement the API call to fetch a single contact by ID
    // This should return a contact object with the shape expected by ViewContact
    const response = await fetch(`/api/contacts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch contact');
    }
    return response.json();
  }
  
  // You can add other API-related functions here as well