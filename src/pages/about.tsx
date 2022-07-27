import Button from "~/components/Button";
import Modal from "~/components/Modal";

export const About = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);
    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);
    return (
        <div>
            <Button onClick={handleShowModal}>Show Modal {showModal}</Button>
            {showModal && <Modal onCancel={handleCloseModal} />}
        </div>
    )
}
export default About