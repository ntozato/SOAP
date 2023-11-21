import { Container, Description, Icon } from "./styles"
import emptyIcon from '../../assets/empty-icon.svg';

const EmptyState = () => {
    return (
        <Container>
            <Icon src={emptyIcon} />
            <Description>You don't have any contacts in your list yet. Click "Add Contact."</Description>
        </Container>
    )
}

export default EmptyState