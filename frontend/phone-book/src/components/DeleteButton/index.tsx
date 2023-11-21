import { Button, Icon } from "./styles";
import trashIcon from '../../assets/trash-icon.svg';

interface DeleteButtonProps {
    setOpenDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
}

const DeleteButton = ({setOpenDeleteModal}: DeleteButtonProps) => {
    return (
        <Button onClick={() => setOpenDeleteModal(true)}>
            <Icon src={trashIcon} />
        </Button>
    )
}

export default DeleteButton