import { Contact } from "../../pages/Home"
import { Input } from "./styles"

interface SearchInputProps {
    setFilteredContacts: React.Dispatch<React.SetStateAction<Contact[]>>,
    contacts: Contact[]
}

const SearchInput = ({ setFilteredContacts, contacts }: SearchInputProps) => {
    
    const handleChange = (value: string) => {
        const filtered = contacts?.filter((contact) => contact.lastname.toLocaleLowerCase().includes(value));
        setFilteredContacts(filtered);
    }

    return (
        <Input
            type="text"
            placeholder="Search for contact by last name..."
            onChange={({ target }) => handleChange(target.value.toLocaleLowerCase())}
        />
    )
}

export default SearchInput