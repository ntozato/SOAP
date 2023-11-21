import { useEffect, useState } from 'react';
import AddButton from "../../components/AddButton"
import ListItem from "../../components/ListItem"
import SearchInput from "../../components/SearchInput"
import { Container, Header, Icon, InputContainer, ItemsContainer, SubHeader, SubTitle, Title } from "./styles"
import { getContacts } from '../../service';
import FormModal from '../../components/FormModal';
import UpdateModal from '../../components/UpdateModal';
import DeleteModal from '../../components/DeleteModal';
import bookIcon from '../../assets/book-icon.svg';
import EmptyState from '../../components/EmptyState';

export interface Contact {
    id: number,
    name: string,
    lastname: string,
    phoneNumber: string
}

const Home = () => {

    const [contacts, setContacts] = useState<Contact[]>([]);
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
    const [idToBeUpdated, setIdToBeUpdated] = useState<number>(0);
    const [nameToBeDeleted, setNameToBeDeleted] = useState<string>('');

    const getAllContacts = async () => {
        const allContacts = await getContacts();
        setContacts(allContacts);
        setFilteredContacts(allContacts)
    }

    useEffect(() => {
        getAllContacts();
    }, [openModal, openUpdateModal, openDeleteModal])    

    return (
        <Container>
            {openModal && <FormModal setOpenModal={setOpenModal} />}
            {openUpdateModal && <UpdateModal setOpenUpdateModal={setOpenUpdateModal} idToBeUpdated={idToBeUpdated} />}
            {openDeleteModal && <DeleteModal setOpenDeleteModal={setOpenDeleteModal} idToBeUpdated={idToBeUpdated} nameToBeDeleted={nameToBeDeleted} />}
            <Header>
                <Icon src={bookIcon} />
                <Title>Phone Book App</Title>
            </Header>
            <SubHeader>
                <SubTitle>Contacts</SubTitle>
                <div onClick={() => setOpenModal(true)}>
                    <AddButton />
                </div>
            </SubHeader>
            <InputContainer>
                <SearchInput setFilteredContacts={setFilteredContacts} contacts={contacts} />
            </InputContainer>
            {!contacts.length && <EmptyState />}
            {contacts.length > 0 && <ItemsContainer>
                {filteredContacts?.map((contact, index) => {
                    return <ListItem 
                                key={index}
                                contact={contact}
                                setOpenUpdateModal={setOpenUpdateModal}
                                setIdToBeUpdated={setIdToBeUpdated}
                                setOpenDeleteModal={setOpenDeleteModal}
                                setNameToBeDeleted={setNameToBeDeleted}
                            />
                })}
            </ItemsContainer>}
        </Container>
    )
}

export default Home