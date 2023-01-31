const DEVELOPER_KEY = "<SUPERVIZ_DEVELOPER_KEY>";
export const supervizSdk = await SuperVizSdk.init(DEVELOPER_KEY, {
    userGroup: {
        id: "<GROUP-ID>",
        name: "<GROUP-NAME>"
    },
    user: {
        id: "<MY-USER-ID>", // make sure you don't use the same user id for different instances
        name: "<MY-USER-NAME>",
        isHostCandidate: true,
    },
    roomId: "<ROOM-ID>",
    defaultAvatars: true,
    enableFollow: true,
    debug: true
});