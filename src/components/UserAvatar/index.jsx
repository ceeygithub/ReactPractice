import { UserAvatarWrapper, UserAvatar, UserAvatarText } from "./style";

const UserAvatarComponent = () => {
    return <UserAvatarWrapper>
        <UserAvatar img={"https://images.pexels.com/photos/17045026/pexels-photo-17045026/free-photo-of-a-woman-in-a-yellow-jacket-and-colorful-beads.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} />
        <UserAvatarText>
        Hi, user  let’s get stated
        </UserAvatarText>
    </UserAvatarWrapper>
}

export default UserAvatarComponent