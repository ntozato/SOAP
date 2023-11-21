import { deleteContact } from "../../service"
import { BackButton, Buttons, ConfirmButton, ContactName, Container, ContainerOverlay, Title } from "./styles"

interface DeleteModalProps {
    idToBeUpdated: number,
    setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>,
    nameToBeDeleted: string
}

const DeleteModal = ({setOpenDeleteModal, nameToBeDeleted, idToBeUpdated}: DeleteModalProps) => {

    const deletePerson = async() => {
        await deleteContact(idToBeUpdated);
        setOpenDeleteModal(false);
    }

    return (
        <ContainerOverlay>
            <Container>
                <ContactName>{ nameToBeDeleted }</ContactName>
                <Title>will be deleted from your contact list. Are you sure?</Title>
                <Buttons>
                    <BackButton onClick={() => setOpenDeleteModal(false)}>Back</BackButton>
                    <ConfirmButton onClick={() => deletePerson()}>Confirm</ConfirmButton>
                </Buttons>
            </Container>
        </ContainerOverlay>
    )
}

export default DeleteModal