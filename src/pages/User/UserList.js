// UserList.js
import React from 'react';

const UserList = ({ users, onDelete }) => {
	return (
		<div>
			{users.length === 0 ? (
				<p>Список пользователей пуст</p>
			) : (
				<table>
					<thead>
					<tr>
						<th>Name</th>
						<th>Username</th>
						<th>Email</th>
						<th>Action</th>
					</tr>
					</thead>
					<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>
								<button onClick={() => onDelete(user.id)}>Удалить</button>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default UserList;
