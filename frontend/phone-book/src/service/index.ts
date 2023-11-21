import api from "../api"


export const getContacts = async () => {
    const contacts = await api.get('/contacts');
    return contacts.data;
}

export const createContact = async (name: string, lastname: string, phoneNumber: string) => {
    await api.post('/contacts', {name, lastname, phoneNumber})
}

export const updateContact = async (id: number, name: string, lastname: string, phoneNumber: string) => {
    await api.put('/contacts', {id, name, lastname, phoneNumber} )
}

export const deleteContact = async (id: number) => {
    await api.post('/contacts/delete',  { id } )
}