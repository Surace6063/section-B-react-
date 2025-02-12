import UserCard from "./UserCard"

const UserList = () => {
    const users = [
        { id: 101, email: "abc@gmail.com", password: "12345" },
        { id: 102, email: "bcd@gmail.com", password: "456" },
        { id: 103, email: "xyz@gmail.com", password: "34534" }
    ]

    const popularUsers = [
        { id: 101, email: "abc@gmail.com", password: "12345" },
        { id: 102, email: "bcd@gmail.com", password: "456" },
        { id: 103, email: "xyz@gmail.com", password: "34534" }
    ]

    return (
        <div>
            {
                users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))
            }

            <h1>Popular Users</h1>
            {
                popularUsers.map(user => (
                    <UserCard key={user.id} user={user} />
                ))
            }
        </div>
    )
}
export default UserList