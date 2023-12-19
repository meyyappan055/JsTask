const AddressDirectory = (function () {
    let directory = [];
    class AddressEntry {
      constructor(name, phoneNumber, email) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
      }
    } 
    function addEntry(name, phoneNumber, email) {
      if (!isValidPhoneNumber(phoneNumber)) {
        throw new Error('this is a invalid phone number format. Please enter a valid phone number.');
      }
      if (email && !isValidEmail(email)) {
        throw new Error('this is a Invalid email format. Please enter a valid email address.');
      }
      const newEntry = new AddressEntry(name, phoneNumber, email);
      directory = [...directory, newEntry];
    }

    function viewEntries() {
      console.log('Address Directory:');
      directory.forEach((entry, index) => {
        console.log(
          `${index + 1}. Name: ${entry.name}, Phone Number: ${entry.phoneNumber}, Email: ${entry.email || 'N/A'}`
        );
      });
    }
    function isValidPhoneNumber(phoneNumber) {
      const phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phoneNumber);
    }
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function searchEntryByName(name) {
      const matchingEntries = directory.filter((entry) => entry.name.toLowerCase().includes(name.toLowerCase()));
      return matchingEntries;
    }
  
    return {
      addEntry,
      viewEntries,
      searchEntryByName,
    };
  })();
  
  try {
    AddressDirectory.addEntry('meyyappan', '1234567890', 'mey@example.com');
    AddressDirectory.addEntry('alexa', '9876543210', 'alexadev@gmail.com');
    AddressDirectory.addEntry('virat', '5551234567'); 
    AddressDirectory.viewEntries();

    const searchResults = AddressDirectory.searchEntryByName('alexa');
    console.log('Search Results:', searchResults);
  } catch (error) {
        console.error(error.message);
  }


  