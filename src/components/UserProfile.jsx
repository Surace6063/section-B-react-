const UserProfile = ({ id, name, age }) => {
    return (
        <div className="border p-4 w-fit mb-2">
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    )
}
export default UserProfile