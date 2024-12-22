import React from "react";
import { ModalProps } from "@/interfaces";

const UserModal: React.FC<ModalProps> = ({ id, name, username, email, address, phone, website, company, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">&times;</button>
        </div>
        <div className="text-gray-600">
          <p><strong>ID:</strong> {id}</p>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
          <p><strong>Company:</strong> {company.name}, {company.catchPhrase}, {company.bs}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="py-2 px-4 bg-gray-500 text-white rounded mr-2">Close</button>
          <button onClick={() => onSubmit({ id, name, username, email, address, phone, website, company })} className="py-2 px-4 bg-blue-500 text-white rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
