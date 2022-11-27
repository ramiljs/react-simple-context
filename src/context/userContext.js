import React from 'react';

const UserContext = React.createContext("Client");
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
