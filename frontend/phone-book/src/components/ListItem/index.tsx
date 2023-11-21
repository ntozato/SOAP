import DeleteButton from "../DeleteButton"
import UpdateButton from "../UpdateButton"
import { ContactInfo, Container, Icon, Name, PhoneNumber } from "./styles"
import phoneIcon from '../../assets/phone.svg'

interface ListItemProps {
    contact: {
        id: number
        name: string,
        lastname: string,
        phoneNumber: string
    },
    setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>,
    setIdToBeUpdated: React.Dispatch<React.SetStateAction<number>>,
    setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>,
    setNameToBeDeleted: React.Dispatch<React.SetStateAction<string>>,
}

const ListItem = ({contact:{id, name, lastname, phoneNumber}, setOpenUpdateModal, setOpenDeleteModal, setIdToBeUpdated, setNameToBeDeleted}: ListItemProps) => {
    
    return (
        <Container>
            <ContactInfo>
                <Name>{`${name} ${lastname}`}</Name>
                <PhoneNumber>
                    <Icon src={phoneIcon} />
                    {phoneNumber}
                </PhoneNumber>
            </ContactInfo>
            <div onClick={() => {setIdToBeUpdated(id); setNameToBeDeleted(`${name} ${lastname}`) }}>
                <UpdateButton setOpenUpdateModal={setOpenUpdateModal} />
                <DeleteButton setOpenDeleteModal={setOpenDeleteModal} />
            </div>
        </Container>
    )
}

export default ListItem