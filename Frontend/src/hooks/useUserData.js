// import { useEffect, useState } from "react";
// import Cookies from 'js-cookie';

export const UserDataType = {
    authToken: String,
    userName: String,
    isLoggedIn: Boolean,
};

// const useUserData = () => {
    
//     const [userData, setUserData] = useState(null);

//     useEffect(() => {
//         const userDataCookie = Cookies.get('userData');
//         const parsedUserData = JSON.parse(userDataCookie || '{}');
//         setUserData(parsedUserData);

//         //Listen for the storage event to update the user data
//         const storageEventListener = (e) => {
        
//             if(e.key === 'userData') {
//                 const updatedUserData = JSON.parse(e.newValue || '{}')
//                 console.log(updatedUserData)
//                 setUserData(updatedUserData);
                
//             }
//         };
//         window.addEventListener('storage', storageEventListener);

//       // Clean up the event listener when the component unmounts
//       return () => {
//            window.removeEventListener('storage', storageEventListener);
//       }
//     }, []);

//     return userData;
    
// };

// export { useUserData }; // Exporting the useUserData function separately

// export default useUserData; // Exporting the useUserData function as default