import { useSelector } from "react-redux";

export const userPermissions = {
    admin:{
        canViewUser: true,
        canEditUser: true,
        canDeleteUser: true,
        canViewLink: true,
        canEditLink: true,
        canCreateLink: true,
        canDeleteLink: true,
    },
    developer:{
     canViewUser: true,
        canEditUser: true,
        canDeleteUser: true,
        canViewLink: true,
        canEditLink: true,
        canCreateLink: true,
        canDeleteLink: true,

}, viewer :{
     canViewUser: true,
        canEditUser: true,
        canDeleteUser: true,
        canViewLink: true,
        canEditLink: true,
        canCreateLink: true,
        canDeleteLink: true,
}
};

export default userPermissions = () =>{
    const user = useSelector((state)=state.userDetails);
    return userPermissions[user?.role] || {};
}