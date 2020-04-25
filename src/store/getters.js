const getters = {
    token: state => state.user.token,
    username: state => state.user.username,
    platform_name_list: state => state.platform.platformNameList,
    platforms: state => state.platform.platforms,
    backgrounds: state => state.background.backgrounds
}

export default getters