const userTransformer = (user) => {
    console.log('run in')
    return { id: user.id, name: user.name, email: user.email, userName: user.userName, profileImage: user.profileImage }
}
export { userTransformer }
