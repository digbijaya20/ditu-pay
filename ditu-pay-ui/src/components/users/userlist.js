import { SearchBox } from "../../shared/components/searchbox/searchbox";

export function UserList() {
    const users = [
      { name: 'John Doe' },
      { name: 'Jane Doe' },
    ];
  return (
    <div className="p-4">
     <h2 className="text-xl font-bold">Your balance: 200.00</h2>
      <h2 className="text-xl font-bold">Users</h2>
        <SearchBox placeholder="Search users" />
      <ul>
        {users.map((user) => (
          <li className="flex items-center justify-between border-b border-gray-200 py-2">
            <span>{user.name}</span>
            <span>
              <button className="bg-gray-800 text-white px-2 py-1 rounded">Send money</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}