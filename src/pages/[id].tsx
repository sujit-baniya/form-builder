export const Hi = (props) => {
    const {id} = useParams()
    return (
        <h1>Hi {id}</h1>
    )
}
export default Hi