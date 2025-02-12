const UserCard = ({ user }) => {
    return (
        <div
            className="border p-2 rounded-md mb-4 w-64"
        >
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}
export default UserCard