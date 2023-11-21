import { useState } from 'react'
import { BackButton, Buttons, Container, ContainerOverlay, Input, UpdateButton, Title } from "./styles"
import { updateContact } from '../../service';

interface UpdateModalProps {
    setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>,
    idToBeUpdated: number
}

const UpdateModal = ({ setOpenUpdateModal, idToBeUpdated }: UpdateModalProps) => {

    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    
    const handleSubmit = async () => {
        await updateContact(idToBeUpdated, firstname, lastname, phoneNumber);
        setOpenUpdateModal(false);
    }

    return (
        <ContainerOverlay>
            <Container>
                <Title>Update contact</Title>
                <Input placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)} />
                <Input placeholder="Lastname" onChange={(e) => setLastname(e.target.value)} />
                <Input placeholder="Phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                <Buttons>
                    <BackButton onClick={() => setOpenUpdateModal(false)}>Back</BackButton>
                    <UpdateButton disabled={!firstname && !lastname && !phoneNumber} onClick={() => handleSubmit()}>Save</UpdateButton>
                </Buttons>
            </Container>
        </ContainerOverlay>
    )
}

export default UpdateModal