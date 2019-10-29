import React , { createContext, useState }from 'react'

export const FolderContext = createContext();

const FolderContextProvider = props => {
  const folders = useState([
    { title: 'Readme.MD', description: 'Directions on the APP', tag:'', id: 1 },
    { title: 'Package.json', description: 'installed node modules', tag:'', id: 1 },
  ]);

  return (
    <FolderContext.Provider value={folders}>
      {props.children}
    </FolderContext.Provider>
  );
};

export default FolderContextProvider;

