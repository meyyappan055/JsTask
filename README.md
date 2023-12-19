# Address Directory

The Address Directory is a JavaScript module designed to manage and view a directory of address entries. Each entry includes a name, phone number, and an optional email address.

## Usage

1. **Include the Module:**
   - Import the `AddressDirectory` module into your JavaScript project.

2. **Adding Entries:**
   - Use the `addEntry` function to add entries to the address directory.
   - Ensure the phone number format is valid.
   - For entries with an email address, ensure it is a valid email format.

3. **Viewing Entries:**
   - Utilize the `viewEntries` function to display the entries in the address directory.

4. **Searching Entries:**
   - Use the `searchEntryByName` function to find entries by name in the directory.

## Entry Validation

- Phone numbers are validated using a regular expression (`/^\d{10}$/`).
- Emails are validated using a regular expression (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`).

## Example

- Add entries to the address directory.
- View the entries.
- Search for a specific entry by name.
