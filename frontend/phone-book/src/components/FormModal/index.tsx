import { useState } from 'react'
import { BackButton, Buttons, Container, ContainerOverlay, Input, SaveButton, Title } from "./styles"
import { createContact } from '../../service';

interface FormModalProps {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const FormModal = ({ setOpenModal }: FormModalProps) => {

    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    
    const handleSubmit = async () => {
        await createContact(firstname, lastname, phoneNumber);
        setOpenModal(false);
    }

    return (
        <ContainerOverlay>
            <Container>
                <Title>New contact</Title>
                <Input placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)} />
                <Input placeholder="Lastname" onChange={(e) => setLastname(e.target.value)} />
                <Input placeholder="Phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                <Buttons>
                    <BackButton onClick={() => setOpenModal(false)}>Back</BackButton>
                    <SaveButton disabled={!(firstname && lastname && phoneNumber)} onClick={() => handleSubmit()}>Add</SaveButton>
                </Buttons>
            </Container>
        </ContainerOverlay>
    )
}

export default FormModal