import { Button, Icon } from "./styles";
import updateIcon from '../../assets/update-icon.svg';

interface UpdateButtonProps {
    setOpenUpdateModal: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateButton = ({setOpenUpdateModal}: UpdateButtonProps) => {

    return (
        <Button onClick={() => setOpenUpdateModal(true)}>
            <Icon src={updateIcon} />
        </Button>
    )
}

export default UpdateButton